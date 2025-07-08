"use client";
import React from "react";
import { CrossIcon } from "lucide-react";
import { useRouter } from "next/navigation";
export function BackButton(props) {
	const router = useRouter();
	const handleClick = () => {
		router.back();
	};
	return (
		<button
			className="absolute top-4 right-5 text-white bg-red-400 "
			onClick={handleClick}
		>
			<CrossIcon size={24} />
		</button>
	);
}
