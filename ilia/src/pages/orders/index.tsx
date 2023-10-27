import OrderCard from "@/components/Cards/OrderCard";
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
	return (
		<div className="flex justify-between">
			<CreateOrderModal
				costumers={costumers}
				isOpen={isModalOpen}
				onClose={() => setIsOpen(false)}
			/>
			<OrderSideBar onCreateCostumerClick={() => setIsOpen(true)} />
			<div className="flex justify-center bg-red-600 w-4/5 mx-auto">
				{orders.map((order) => (
					<>
						<OrderCard order={order} />
					</>
				))}
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
