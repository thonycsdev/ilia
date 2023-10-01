import { Product } from "@/models/product";
import Image from "next/image";
import React from "react";

type ProductCardProps = {
	product: Product;
};

function ProductCard(props: ProductCardProps) {
	const { product } = props;
	return (
		<div className=" w-96 h-80 flex flex-col items-center justify-center gap-7 rounded-md transform duration-150 hover:scale-110 hover:cursor-pointer shadow-2xl">
			<Image src={product.image} alt={product.title} width={50} height={50} />
			<div className="text-center">{product.title}</div>
			<div>R$: {product.price}</div>
			<div>Stars: {product.rating.rate}</div>
		</div>
	);
}

export default ProductCard;
