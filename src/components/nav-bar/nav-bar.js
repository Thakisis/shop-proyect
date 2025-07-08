import React from "react";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
export function NavBar(props) {
	return (
		<div className="fixed inset-x-0 bg-red-500 p-4 flex justify-end">
			<div> </div>
			<Link href="/cart">
				<ShoppingBasket />
			</Link>
		</div>
	);
}
