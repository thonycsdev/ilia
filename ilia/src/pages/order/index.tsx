import OrderCard from "@/Components/Cards/OrderCard";
import { OrderContext } from "@/contexts/orderContext";
import React, { useContext } from "react";

function Orders() {
	const { orders } = useContext(OrderContext);
	return (
		<div className="w-screen h-full flex justify-center items-center flex-wrap gap-7 pt-12">
			{orders.map((order) => (
				<OrderCard order={order} key={order.id} />
			))}
		</div>
	);
}

export default Orders;
