import ProductCard from "@/components/Cards/ProductCard";
import { CartContext } from "@/contexts/cartContext";
import { ProductContext } from "@/contexts/productContext";
import React, { useContext } from "react";

function Products() {
	const { products } = useContext(ProductContext);
	const { cartItens } = useContext(CartContext);
	return (
		<>
			<div>Cart itens: {cartItens.length}</div>
			<div className="w-screen h-full flex justify-center items-center flex-wrap gap-7 pt-12">
				{products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</>
	);
}

export default Products;
