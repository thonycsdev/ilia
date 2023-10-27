import { Product } from "@/models/product";
import React, { useContext } from "react";
import StantardButton from "../Buttons/StantardButton";
import { CartContext } from "@/contexts/cartContext";

type CartItemLabel = {
	product: Product;
};

function CartItemLabel({ product }: CartItemLabel) {
	const { removeProductFromCartByProductId } = useContext(CartContext);
	return (
		<>
			<div className="bg-cyan-600 rounded-md px-14 py-3 flex gap-5 justify-between shadow-md">
				<StantardButton
					onClick={() => removeProductFromCartByProductId(product.id)}
					className="hover:text-cyan-200 hover:scale-125 transition-all duration-150"
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
							d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</StantardButton>
				<label className="whitespace-nowrap text-white font-bold overflow-clip w-4/5">
					{product.title}
				</label>
				<span className="w-1/5 flex justify-center bg-slate-200 rounded-lg">
					R$:{product.price}
				</span>
			</div>
		</>
	);
}

export default CartItemLabel;
