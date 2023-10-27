import { Product } from "@/models/product";
import Image from "next/image";
import React, { useContext } from "react";
import StantardButton from "../Buttons/StantardButton";
import { CartContext } from "@/contexts/cartContext";

type ProductCardProps = {
	product: Product;
};

function ProductCard(props: ProductCardProps) {
	const { addProductToCart } = useContext(CartContext);
	const { product } = props;
	return (
		<>
			<div className=" w-96 h-80 flex flex-col bg-slate-100 items-center justify-center gap-7 rounded-md transform duration-150 hover:scale-110 hover:cursor-pointer shadow-2xl">
				<Image src={product.image} alt={product.title} width={50} height={50} />
				<div className="text-center">{product.title}</div>
				<div>R$: {product.price}</div>
				<div>Stars: {product.rating.rate}</div>
				<StantardButton onClick={() => addProductToCart(product)}>
					Add to Cart
				</StantardButton>
			</div>
		</>
	);
}

export default ProductCard;
