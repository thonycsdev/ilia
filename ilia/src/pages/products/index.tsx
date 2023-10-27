import StantardButton from "@/components/Buttons/StantardButton";
import ProductCard from "@/components/Cards/ProductCard";
import CreateOrderModal from "@/components/Orders/CreateOrderModal";
import { CartContext } from "@/contexts/cartContext";
import { ProductContext } from "@/contexts/productContext";
import { Costumer } from "@/models/costumer";
import costumerRepository from "@/repositories/customerRepository";
import React, { useContext, useState } from "react";

function Products({ costumers }: { costumers: Costumer[] }) {
	const [isOpen, setIsOpen] = useState(false);
	const { products } = useContext(ProductContext);
	const { cartItens } = useContext(CartContext);
	return (
		<>
			<CreateOrderModal
				costumers={costumers}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
			<div className="flex gap-10 ml-10">
				<div className="p-2 px-10 bg-cyan-600 text-white rounded-md font-bold text-lg">
					Cart: {cartItens.length}
				</div>
				<StantardButton onClick={() => setIsOpen(true)}>
					Check out
				</StantardButton>
			</div>
			<div className="w-screen h-full flex justify-center items-center flex-wrap gap-7 pt-12">
				{products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</>
	);
}

export default Products;

export async function getServerSideProps() {
	const { getAllCostumers } = costumerRepository();
	const costumers = await getAllCostumers();
	return {
		props: {
			costumers,
		},
	};
}
