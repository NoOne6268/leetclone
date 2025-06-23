export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};


export type Problem = {
  id: string;
  title: string;
  problemStatement: string;
  order: number;
  examples: Example[];
  constraints: string[];
  testCases: Array<{
    input: any;
    expectedOutput: any;
  }>;
  starterCode: {
    [key: string]: string;
  };
  equivalenceCode: EquivalenceCode;
  functionSignatures: {
    [key: string]: string;
  };
};

export type EquivalenceCode = {
  type: 'none' | 'array' | 'set' | 'numeric' | 'custom';
    tolerance?: number; // For numeric comparisons
    customChecker?: {
      code: string;
      language: string;
      judge0Id: number;
  };
};

export type DBProblem = {
	id: string;
	title: string;
	category: string;
	difficulty: string;
	likes: number;
	dislikes: number;
	order: number;
	videoId?: string;
	link?: string;
};