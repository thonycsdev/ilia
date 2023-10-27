import { Order } from "@/models/costumer";
import React from "react";
import StantardButton from "../Buttons/StantardButton";
import { formatDateToBrazilFormat } from "@/functions/formatDate";

type OrderCardProps = {
	order: Order;
};
function OrderCard(props: OrderCardProps) {
	const { order } = props;
	return (
		<div className=" w-11/12 bg-gray-50 shadow-2xl h-44 flex flex-col justify-between rounded-xl">
			<div className="bg-cyan-600 text-white font-bold p-2 text-lg rounded-xl flex justify-start gap-14">
				<div>Order Number: {order.id}</div>
				<div>
					Order made in: {formatDateToBrazilFormat(new Date(order.createdAt))}
				</div>
			</div>
			<div className="flex items-center flex-row h-full justify-around">
				<table className="shadow-md w-3/4 rounded-md table-auto ">
					<thead className="bg-slate-100 border-b border-slate-200">
						<tr>
							<th className=" px-6 font-bold py-3 text-left text-sm text-slate-900 rounded-tl-md border">
								<label>Costumer</label>
							</th>
							<th className=" px-6 font-bold py-3 text-left text-sm text-slate-900 rounded-tl-md border">
								<label>Products Quantity</label>
							</th>
							<th className=" px-6 font-bold py-3 text-left text-sm text-slate-900 rounded-tl-md border">
								<label>Price</label>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="px-6 ">{order.customer?.name}</td>
							<td className="px-6 ">{order.customer?.orders.length}</td>
							<td className="px-6 ">{1234}</td>
						</tr>
					</tbody>
				</table>
				<div className="">
					<StantardButton>Details...</StantardButton>
				</div>
			</div>
		</div>
	);
}

export default OrderCard;
