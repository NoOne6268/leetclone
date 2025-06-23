import { EquivalenceCode } from '@/utils/types/problem';
import type { NextApiRequest, NextApiResponse } from 'next';

interface SubmissionRequest {
  sourceCode: string;
  languageId: number;
  testInput: any;
  expectedOutput: string;
  equivalenceCode?: EquivalenceCode;
}

interface SubmissionResponse {
  success: boolean;
  result?: any;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubmissionResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { sourceCode, languageId, testInput, expectedOutput, equivalenceCode }: SubmissionRequest = req.body;

    if (!sourceCode || !languageId || expectedOutput === undefined) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: sourceCode, languageId, expectedOutput' 
      });
    }

    const result = await submitToJudge0(
      sourceCode,
      languageId,
      testInput,
      expectedOutput,
      { equivalenceCode: equivalenceCode ?? { type: 'none' } }
    );
    
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('Judge0 API error:', error);
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Internal server error' 
    });
  }
}

// Move all your Judge0 functions here
const submitToJudge0 = async (
  sourceCode: string, 
  languageId: number, 
  testInput: any, 
  expectedOutput: string,
  options?: {
    equivalenceCode: EquivalenceCode
  }
) => {
  options = options ?? { equivalenceCode: { type: 'none' } };
  try {
    const judge0Url = process.env.JUDGE0_URL || 'http://localhost:2358';
    
    // Submit user code normally
    const result = await executeUserCode(sourceCode, languageId, testInput, judge0Url);
    
    // If equivalence checking is enabled and we have a valid result
    if (options.equivalenceCode && 
        options.equivalenceCode.type !== 'none' && 
        (result.status.id === 3 || result.status.id === 4)) {
      
      let isEquivalent = false;
      
      if (options.equivalenceCode.type === 'custom' && options.equivalenceCode.customChecker) {
        // Use custom checker code
        isEquivalent = await runCustomChecker(
          result.stdout || "",
          expectedOutput,
          testInput,
          options.equivalenceCode.customChecker,
          judge0Url
        );
      } else {
        // Use built-in equivalence checking
        isEquivalent = validateEquivalence(
          result.stdout || "", 
          expectedOutput, 
          options.equivalenceCode
        );
      }
      
      result.status = {
        id: isEquivalent ? 3 : 4,
        description: isEquivalent ? "Accepted" : "Wrong Answer"
      };
      
      result.equivalence_check = {
        type: options.equivalenceCode.type,
        passed: isEquivalent
      };
    }
    
    return result;
    
  } catch (error) {
    console.error("Judge0 submission error:", error);
    throw error;
  }
};

const executeUserCode = async (sourceCode: string, languageId: number, testInput: any, judge0Url: string) => {
  // Submit the code
  const submissionResponse = await fetch(`${judge0Url}/submissions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      source_code: sourceCode,
      language_id: languageId,
      stdin: typeof testInput === 'string' ? testInput : JSON.stringify(testInput),
      wait: false,
      cpu_time_limit: 2,
      memory_limit: 128000
    })
  });

  if (!submissionResponse.ok) {
    throw new Error(`Judge0 API error: ${submissionResponse.status}`);
  }

  const submissionResult = await submissionResponse.json();
  const token = submissionResult.token;

  // Poll for results
  let result;
  while (true) {
    const resultResponse = await fetch(`${judge0Url}/submissions/${token}`);
    
    if (!resultResponse.ok) {
      throw new Error(`Judge0 API error: ${resultResponse.status}`);
    }
    
    result = await resultResponse.json();
    
    if (result.status && result.status.id > 2) {
      break;
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  return result;
};

const runCustomChecker = async (
  userOutput: string,
  expectedOutput: string,
  testInput: any,
  customChecker: { code: string; language: string; judge0Id: number },
  judge0Url: string
): Promise<boolean> => {
  try {
    const checkerCodeWithInputs = `
${customChecker.code}

user_output = """${userOutput.replace(/"/g, '\\"')}"""
expected_output = """${expectedOutput.replace(/"/g, '\\"')}"""
test_input = """${JSON.stringify(testInput).replace(/"/g, '\\"')}"""

result = check_equivalence(user_output, expected_output, test_input)
print(1 if result else 0)
    `;

    const checkerSubmission = await fetch(`${judge0Url}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source_code: checkerCodeWithInputs,
        language_id: customChecker.judge0Id,
        wait: false,
        cpu_time_limit: 2,
        memory_limit: 128000
      })
    });

    if (!checkerSubmission.ok) {
      throw new Error(`Checker submission failed: ${checkerSubmission.status}`);
    }

    const checkerResult = await checkerSubmission.json();
    const checkerToken = checkerResult.token;

    const checkerOutput = await waitForSubmission(checkerToken, judge0Url);
    
    return checkerOutput.stdout && checkerOutput.stdout.trim() === "1";
  } catch (error) {
    console.error("Custom checker error:", error);
    return false;
  }
};

const waitForSubmission = async (token: string, judge0Url: string) => {
  while (true) {
    const response = await fetch(`${judge0Url}/submissions/${token}?base64_encoded=true`);
    const result = await response.json();
    
    if (result.status && result.status.id > 2) {
      return result;
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};

const validateEquivalence = (userOutput: string, expectedOutput: string, equivalenceCode: any): boolean => {
  const { type, tolerance = 1e-9 } = equivalenceCode;
  
  const cleanUser = userOutput.trim();
  const cleanExpected = expectedOutput.trim();
  
  if (cleanUser === cleanExpected) {
    return true;
  }
  
  try {
    switch (type) {
      case 'array':
        return validateArrayEquivalence(cleanUser, cleanExpected);
      case 'set':
        return validateSetEquivalence(cleanUser, cleanExpected);
      case 'numeric':
        return validateNumericEquivalence(cleanUser, cleanExpected, tolerance);
      case 'none':
      default:
        return false;
    }
  } catch (error) {
    console.error("Equivalence validation error:", error);
    return false;
  }
};

const validateArrayEquivalence = (userOutput: string, expectedOutput: string): boolean => {
  try {
    const userArray = JSON.parse(userOutput);
    const expectedArray = JSON.parse(expectedOutput);
    
    if (!Array.isArray(userArray) || !Array.isArray(expectedArray)) {
      return false;
    }
    
    if (userArray.length !== expectedArray.length) {
      return false;
    }
    
    const sortedUser = [...userArray].sort((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      }
      return String(a).localeCompare(String(b));
    });
    
    const sortedExpected = [...expectedArray].sort((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      }
      return String(a).localeCompare(String(b));
    });
    
    return JSON.stringify(sortedUser) === JSON.stringify(sortedExpected);
  } catch {
    return false;
  }
};

const validateSetEquivalence = (userOutput: string, expectedOutput: string): boolean => {
  try {
    const userArray = JSON.parse(userOutput);
    const expectedArray = JSON.parse(expectedOutput);
    
    if (!Array.isArray(userArray) || !Array.isArray(expectedArray)) {
      return false;
    }
    
    const userSet = new Set(userArray);
    const expectedSet = new Set(expectedArray);
    
    if (userSet.size !== expectedSet.size) {
      return false;
    }
    
    Array.from(userSet).forEach(item => {
      if (!expectedSet.has(item)) {
        return false;
      }
    });
    
    return true;
  } catch {
    return false;
  }
};

const validateNumericEquivalence = (userOutput: string, expectedOutput: string, tolerance: number): boolean => {
  try {
    const userNum = parseFloat(userOutput);
    const expectedNum = parseFloat(expectedOutput);
    
    if (isNaN(userNum) || isNaN(expectedNum)) {
      return false;
    }
    
    return Math.abs(userNum - expectedNum) <= tolerance;
  } catch {
    return false;
  }
};
