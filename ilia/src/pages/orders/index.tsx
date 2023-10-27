import CreateOrderModal from "@/components/Orders/CreateOrderModal";
import OrderSideBar from "@/components/SideBar/OrderSideBar";
import { Costumer } from "@/models/costumer";
import costumerRepository from "@/repositories/customerRepository";
import React, { useState } from "react";

function Orders({ costumers }: { costumers: Costumer[] }) {
	const [isModalOpen, setIsOpen] = useState(false);
	return (
		<div>
			<CreateOrderModal
				costumers={costumers}
				isOpen={isModalOpen}
				onClose={() => setIsOpen(false)}
			/>
			<OrderSideBar onCreateCostumerClick={() => setIsOpen(true)} />
		</div>
	);
}

export default Orders;

export async function getServerSideProps() {
	const { getAllCostumers } = costumerRepository();
	const costumers = await getAllCostumers();
	return {
		props: {
			costumers,
		},
	};
}
