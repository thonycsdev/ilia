import { Product } from "@/models/product";
import Image from "next/image";
import React, { useContext } from "react";
import StantardButton from "../Buttons/StantardButton";
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
			<div className="m-5 w-60 h-60 rounded-2xl bg-gradient-to-t from-cyan-700 bg-transparent flex flex-col items-center ">
				<div className="w-16 h-16 overflow-hidden hover:scale-150 transition-all duration-150 hover:overflow-visible">
					<Image
						src={product.image}
						alt={product.title}
						width={50}
						height={50}
						className="rounded-sm bg-transparent bg-blend-multiply "
					/>
				</div>
				<div className="text-center">{product.title}</div>
				<div>{formatCurrency(product.price)}</div>
				<div>Stars: {product.rating.rate}</div>
				<StantardButton onClick={() => addProductToCart(product)}>
					Add to Cart
				</StantardButton>
			</div>
		</>
	);
}

export default ProductCard;
