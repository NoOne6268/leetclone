import { auth } from "@/firebase";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";

export default function Logout() {
	const [signOut, loading, error] = useSignOut(auth);

	const handleLogout = () => {
		signOut();
	};
	return (
		<button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange' onClick={handleLogout}>
			<FiLogOut />
		</button>
	);
};