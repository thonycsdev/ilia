import { Order } from "@/models/costumer";
import React from "react";

type OrderCardProps = {
	order: Order;
};
function OrderCard(props: OrderCardProps) {
	const { order } = props;
	return (
		<div className=" w-96 h-80 flex flex-col bg-slate-100 items-center justify-center gap-7 rounded-md transform duration-150 hover:scale-110 hover:cursor-pointer shadow-2xl">
			<div className="text-center"> Customer Id: {order.customerId}</div>
			<div>Product Id: {order.productId}</div>
		</div>
	);
}

export default OrderCard;
