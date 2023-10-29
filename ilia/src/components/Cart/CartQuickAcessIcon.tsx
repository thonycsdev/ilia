import { formatCurrency } from "@/functions/formatCurrency";
import sumTotalCartPrice from "@/functions/sumTotalCartPrice";
import { Product } from "@/models/product";
import React, { useState } from "react";
import QuickCartModal from "./QuickCartModal";

type CartQuickAccessIconProps = {
	cartItems: Product[];
};

function CartQuickAccessIcon({ cartItems }: CartQuickAccessIconProps) {
	const [isOpen, setIsOpen] = useState(false);
	const totalCartCost = sumTotalCartPrice(cartItems);
	return (
		<>
			<QuickCartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
			<div className="flex flex-col gap-10 pt-10 ">
				<div
					className="p-2 px-10 bg-cyan-600 text-white rounded-md font-bold text-lg flex gap-4 justify-center hover:cursor-pointer hover:bg-cyan-500"
					onClick={() => setIsOpen(true)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
						/>
					</svg>
					<div>Cart: {cartItems.length}</div>
				</div>
				<div className="p-2 px-10 bg-cyan-600 text-white rounded-md font-bold text-lg flex gap-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<div></div>
					Total: {formatCurrency(totalCartCost)}
				</div>
				<div></div>
				<div></div>
			</div>
		</>
	);
}

export default CartQuickAccessIcon;
