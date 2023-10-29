import StandardButton from "@/components/Buttons/StandardButton";
import ProductCard from "@/components/Cards/ProductCard";
import CartQuickAcessIcon from "@/components/Cart/CartQuickAcessIcon";
import Filter from "@/components/Filter/Filter";
import CreateOrderModal from "@/components/Orders/CreateOrderModal";
import { CartContext } from "@/contexts/cartContext";
import { ProductContext } from "@/contexts/productContext";
import { Costumer } from "@/models/costumer";
import { Product } from "@/models/product";
import costumerRepository from "@/repositories/customerRepository";
import React, { useContext, useState } from "react";

function Products({ costumers }: { costumers: Costumer[] }) {
	const [isOpen, setIsOpen] = useState(false);
	const { products } = useContext(ProductContext);
	const { cartItens } = useContext(CartContext);
	const [searchTerm, setSearchTerm] = useState("");

	const filterProducts = (products: Product[]) => {
		return products.filter((order) => {
			const name = order.title.toLocaleLowerCase();
			return name.includes(searchTerm.toLocaleLowerCase());
		});
	};

	return (
		<>
			<CreateOrderModal
				costumers={costumers}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
			<div className="flex gap-10 ml-10">
				<CartQuickAcessIcon cartItens={cartItens} />
				<div className="pt-10 font-bold text-lg">
					<StandardButton
						onClick={() => setIsOpen(true)}
						disabled={!(cartItens.length > 0)}
					>
						Check out
					</StandardButton>
				</div>
			</div>
			<Filter onUserTyping={(s) => setSearchTerm(s)} />

			<div className="w-screen h-full flex justify-center items-center flex-wrap gap-7 pt-12">
				{filterProducts(products).map((product) => (
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
