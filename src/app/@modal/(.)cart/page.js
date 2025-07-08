import React from "react";
import { BackButton } from "@/components/back-button";
export default function ModalCart(props) {
	return (
		<div className="fixed inset-0  bg-black/20  text-white z-60 flex justify-center items-center">
			<div className="absolute bg-black  text-white p-20">
				cartModal
				<BackButton />
			</div>
		</div>
	);
}
