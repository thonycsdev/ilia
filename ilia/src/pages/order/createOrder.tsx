import OrdersForm from "@/components/Orders/OrdersForm";
import { Costumer } from "@/models/costumer";
import costumerRepository from "@/repositories/customerRepository";
import React from "react";

function createOrder({ costumers }: { costumers: Costumer[] }) {
	return <OrdersForm costumers={costumers} />;
}

export default createOrder;

export async function getServerSideProps() {
	const { getAllCostumers } = costumerRepository();
	const response = await getAllCostumers();
	return {
		props: {
			costumers: response,
		},
	};
}
