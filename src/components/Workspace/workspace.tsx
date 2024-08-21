import React, { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./problem_description";
import Playground from "./Playground/playground";
import { Problem } from "@/utils/types/problem";
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";

type WorkspaceProps = {
	problem: Problem;
};

export default function Workspace({problem}: WorkspaceProps) {
    const { width, height } = useWindowSize();
    const [success, setSuccess] = useState(false);
	const [solved, setSolved] = useState(false);
    
    return <div>
        <Split className="split" minSize={0}>
            <ProblemDescription problem={problem} _solved={solved} />
            <Playground problem={problem} setSolved={setSolved} setSuccess={setSuccess}/>
        </Split>
        {success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1} />}
    </div>
};