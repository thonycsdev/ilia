import { Product } from "@/models/product";
import React, { useContext } from "react";
import StandardButton from "../Buttons/StantardButton";
import { CartContext } from "@/contexts/cartContext";
import { formatCurrency } from "@/functions/formatCurrency";

type ProductCardProps = {
	product: Product;
};

function ProductCard(props: ProductCardProps) {
	const { addProductToCart } = useContext(CartContext);
	const { product } = props;
	return (
		<>
			<div className="max-w-sm h-2/4  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
				<div className="bg-white rounded-lg m-7">
					<div className="h-96 w-96">
						<img
							className="w-5/6 h-5/6 p-8 object-fit"
							src={product.image}
							alt="product image"
						/>
					</div>
				</div>
				<div className="px-5 pb-5">
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden">
						{product.title}
					</h5>
					<div className="flex items-center mt-2.5 mb-5">
						<span className="bg-blue-100 whitespace-break-spaces text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
							{product.rating.rate}
						</span>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-3xl font-bold text-gray-900 dark:text-white">
							{formatCurrency(product.price)}
						</span>
						<StandardButton onClick={() => addProductToCart(product)}>
							Add to Cart
						</StandardButton>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductCard;
