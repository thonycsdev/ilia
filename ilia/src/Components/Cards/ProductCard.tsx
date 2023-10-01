import { Product } from "@/models/product";
import React from "react";

type ProductCardProps = {
	product: Product;
};

function ProductCard(props: ProductCardProps) {
	const { product } = props;
	return (
		<div className=" w-96 h-80 flex flex-col items-center justify-center gap-7 rounded-md transform duration-150 hover:scale-110 hover:cursor-pointer shadow-2xl">
			<div className="text-center">{product.title}</div>
			<div>R$: {product.price}</div>
			<div>Stars: {product.rating.rate}</div>

			<div className="font-bold text-blue-500 hover:text-blue-400">
				See more...
			</div>
		</div>
	);
}

export default ProductCard;
