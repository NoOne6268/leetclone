import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";
import { authModelState } from "@/atoms/authModelAtom";
import Image from "next/image";

export default function Navbar() {
    const setAuthModelState = useSetRecoilState(authModelState);
    const handleClick = () =>{
        setAuthModelState((prev) => ({...prev, isOpen: true }));
    };

    return <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
        <Link href="/" className="flex items-center justify-center h-20">
            <Image src="/logo.png" alt="LeetClone" width={200} height={200}/>
        </Link>
        <div className="flex items-center">
            <button className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium border-2 border-transparent hover:bg-white hover:text-brand-orange hover:border-2 hover: border-brand-orange transition duration-300 ease-in-out" onClick={handleClick}>Sign In</button>
        </div>
    </div>;
};