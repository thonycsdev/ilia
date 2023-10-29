import OrderCard from "@/components/Cards/OrderCard";
import Filter from "@/components/Filter/Filter";
import CreateOrderModal from "@/components/Orders/CreateOrderModal";
import OrderSideBar from "@/components/SideBar/OrderSideBar";
import { Costumer, Order } from "@/models/costumer";
import costumerRepository from "@/repositories/customerRepository";
import orderRepository from "@/repositories/orderRepository";
import React, { useState } from "react";

function Orders({
	costumers,
	orders,
}: {
	costumers: Costumer[];
	orders: Order[];
}) {
	const [isModalOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const filterOrders = (products: Order[]) => {
		return products.filter((order) => {
			const costumer = costumers.find(
				(costumer) => costumer.id === order.customerId
			);
			const name = costumer!.name.toLocaleLowerCase();
			return name.includes(searchTerm.toLocaleLowerCase());
		});
	};

	return (
		<div className="flex justify-between">
			<CreateOrderModal
				costumers={costumers}
				isOpen={isModalOpen}
				onClose={() => setIsOpen(false)}
			/>
			<OrderSideBar onCreateCostumerClick={() => setIsOpen(true)} />
			<div className="w-full">
				<Filter onUserTyping={(e) => setSearchTerm(e)} />
				<div className="mt-16 flex flex-col  items-center gap-10 w-4/5 mx-auto">
					{filterOrders(orders).map((order) => (
						<>
							<OrderCard
								order={order}
								costumer={
									costumers.find(
										(customer) => customer.id === order.customerId
									)!
								}
							/>
						</>
					))}
				</div>
			</div>
		</div>
	);
}

export default Orders;

export async function getServerSideProps() {
	const { getAllCostumers } = costumerRepository();
	const { getAllOrders } = orderRepository();
	const costumers = await getAllCostumers();
	const orders = await getAllOrders();
	return {
		props: {
			costumers,
			orders,
		},
	};
}
