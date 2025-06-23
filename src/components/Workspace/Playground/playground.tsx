import React, { useEffect, useState } from "react";
import PreferenceNav from "./pref_nav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import EditorFooter from "./editor_footer";
import { Problem } from "@/utils/types/problem";
import { auth, firestore } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import useLocalStorage from "@/hooks/useLocalStorage";
import { judge0LanguageMap, languageExtensions, languageNames } from "@/utils/constants";

type PlaygroundProps = {
	problem: Problem;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
	setSolved: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ISettings {
	fontSize: string;
	settingsModalIsOpen: boolean;
	dropdownIsOpen: boolean;
}

type Language = keyof typeof judge0LanguageMap;

export default function Playground({ problem, setSuccess, setSolved }: PlaygroundProps) {
	const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
	const [selectedLanguage, setSelectedLanguage] = useLocalStorage("lcc-language", "javascript");
	const [userCode, setUserCode] = useState<string>("");
	const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const judge0API = process.env.NEXT_PUBLIC_JUDGE0_API ? process.env.NEXT_PUBLIC_JUDGE0_API : "http://localhost:2358";

	const onChange = (value: string) => {
		setUserCode(value);
		localStorage.setItem(`code-${pid}-${selectedLanguage}`, JSON.stringify(value));
	};

	const [settings, setSettings] = useState<ISettings>({
		fontSize: fontSize,
		settingsModalIsOpen: false,
		dropdownIsOpen: false,
	});

	const [user] = useAuthState(auth);
	const {
		query: { pid },
	} = useRouter();

	const handleLanguageChange = (language: Language) => {
		setSelectedLanguage(language);
		const savedCode = localStorage.getItem(`code-${pid}-${language}`);
		setUserCode(savedCode ? JSON.parse(savedCode) : problem.starterCode[language] || "");
	};

	const handleSubmit = async () => {
		if (!user) {
			toast.error("Please login to submit your code", {
				position: "top-center",
				autoClose: 3000,
				theme: "dark",
			});
			return;
		}

		if (!userCode.trim()) {
			toast.error("Please write some code before submitting", {
				position: "top-center",
				autoClose: 3000,
				theme: "dark",
			});
			return;
		}

		setIsSubmitting(true);
		let allTestsPassed = true;

		try {
			// Run all test cases
			for (let i = 0; i < problem.testCases.length; i++) {
				const testCase = problem.testCases[i];
				
				const response = await fetch(`${judge0API}/submissions/?base64_encoded=true`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						sourceCode: userCode,
						languageId: judge0LanguageMap[selectedLanguage as keyof typeof judge0LanguageMap],
						testInput: testCase.input,
						expectedOutput: JSON.stringify(testCase.expectedOutput),
						equivalenceCode: problem.equivalenceCode
					}),
				});

				const result = await response.json();

				if (!result.success) {
					throw new Error(result.error || 'Submission failed');
				}

				// Check if this test case passed
				if (result.result.status.id !== 3) { // 3 = Accepted
					allTestsPassed = false;
					
					// Handle different error types
					if (result.result.status.id === 4) { // Wrong Answer
						toast.error(`Test case ${i + 1} failed: Wrong Answer`, {
							position: "top-center",
							autoClose: 3000,
							theme: "dark",
						});
					} else if (result.result.status.id === 5) { // Time Limit Exceeded
						toast.error(`Test case ${i + 1} failed: Time Limit Exceeded`, {
							position: "top-center",
							autoClose: 3000,
							theme: "dark",
						});
					} else if (result.result.status.id === 6) { // Compilation Error
						toast.error(`Compilation Error: ${result.result.compile_output || 'Unknown error'}`, {
							position: "top-center",
							autoClose: 5000,
							theme: "dark",
						});
					} else if (result.result.status.id === 11) { // Runtime Error
						toast.error(`Runtime Error: ${result.result.stderr || 'Unknown error'}`, {
							position: "top-center",
							autoClose: 5000,
							theme: "dark",
						});
					} else {
						toast.error(`Test case ${i + 1} failed: ${result.result.status.description}`, {
							position: "top-center",
							autoClose: 3000,
							theme: "dark",
						});
					}
					break; // Stop on first failure
				}
			}

			if (allTestsPassed) {
				toast.success("Congrats! All tests passed!", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
				setSuccess(true);
				setTimeout(() => {
					setSuccess(false);
				}, 4000);

				const userRef = doc(firestore, "users", user.uid);
				await updateDoc(userRef, {
					solvedProblems: arrayUnion(pid),
				});
				setSolved(true);
			}

		} catch (error: any) {
			console.error('Submission error:', error);
			toast.error(error.message || "An error occurred during submission", {
				position: "top-center",
				autoClose: 3000,
				theme: "dark",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		const code = localStorage.getItem(`code-${pid}-${selectedLanguage}`);
		if (user) {
			setUserCode(code ? JSON.parse(code) : problem.starterCode[selectedLanguage] || "");
		} else {
			setUserCode(problem.starterCode[selectedLanguage] || "");
		}
	}, [pid, user, problem.starterCode, selectedLanguage]);

	function handleRun(): void {
		throw new Error("Function not implemented.");
	}

	return (
		<div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
			<PreferenceNav 
	      settings={settings} 
	      setSettings={setSettings}
	      selectedLanguage={selectedLanguage}
	      onLanguageChange={handleLanguageChange}
      />

			<Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
				<div className='w-full overflow-auto'>
					<CodeMirror
	        	value={userCode}
	        	theme={vscodeDark}
	        	onChange={onChange}
      	  	extensions={languageExtensions[selectedLanguage as Language]}
		        style={{ fontSize: settings.fontSize }}
	        />
				</div>
				<div className='w-full px-5 overflow-auto'>
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>

					<div className='flex'>
						{problem.examples.map((example: any, index: any) => (
							<div
								className='mr-2 items-start mt-2'
								key={example.id}
								onClick={() => setActiveTestCaseId(index)}
							>
								<div className='flex flex-wrap items-center gap-y-4'>
									<div
										className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap ${
											activeTestCaseId === index ? "text-white" : "text-gray-500"
										}`}
									>
										Case {index + 1}
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='font-semibold my-4'>
						<p className='text-sm font-medium mt-4 text-white'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{problem.examples[activeTestCaseId].inputText}
						</div>
						<p className='text-sm font-medium mt-4 text-white'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{problem.examples[activeTestCaseId].outputText}
						</div>
					</div>
				</div>
			</Split>
			<EditorFooter handleSubmit={handleSubmit} isSubmitting={isSubmitting} handleRun={handleRun} />
		</div>
	);
}
