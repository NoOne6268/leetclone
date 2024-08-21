import { authModelState } from "@/atoms/authModelAtom";
import AuthModel from "@/components/models/auth_model";
import Navbar from "@/components/navbar";
import { auth } from "@/firebase";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";
import Image from "next/image";

export default function AuthPage(){
    const authModel = useRecoilValue(authModelState);
    const [user, loading, error] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if(user) router.push('/');
        if (!loading && !user) setPageLoading(false);
    }, [user, router, loading]);
    
    return pageLoading ? null : <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
    <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
            <Image src="/hero.png" alt="Hero Image" width={700} height={700}/>
        </div>
        {authModel.isOpen && <AuthModel />}
    </div>
</div>;
}