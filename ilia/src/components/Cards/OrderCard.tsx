import { Costumer, Order } from "@/models/costumer";
import React, { useContext, useState } from "react";
import { formatDateToBrazilFormat } from "@/functions/formatDate";
import { OrderContext } from "@/contexts/orderContext";
import Toast from "../Toast/Toast";
import sumTotalCartPrice from "@/functions/sumTotalCartPrice";
import { formatCurrency } from "@/functions/formatCurrency";
import OrderDetailsModal from "../Orders/OrderDetailsModal";

type OrderCardProps = {
	order: Order;
	costumer: Costumer;
};
function OrderCard({ order, costumer }: OrderCardProps) {
	const { deleteOrder } = useContext(OrderContext);
	const totalProductsPrice = sumTotalCartPrice(order.products);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const handleDeleteClick = async () => {
		const { successToast, failToast } = Toast();
		try {
			await deleteOrder(order.id!);
			successToast("Order deleted successfully");
		} catch (error) {
			failToast("Error deleting order");
		}
	};
	return (
		<>
			<OrderDetailsModal
				costumer={costumer}
				isOpen={isOpenModal}
				onClose={() => setIsOpenModal(false)}
				order={order}
			/>
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
								<td className="px-6 ">{costumer.name}</td>
								<td className="px-6 ">{order.products.length}</td>
								<td className="px-6 ">{formatCurrency(totalProductsPrice)}</td>
							</tr>
						</tbody>
					</table>
					<div className="flex gap-3">
						<div
							className="hover:scale-125 transition-all duration-150 hover:text-cyan-400"
							aria-label="eye-details"
							onClick={() => setIsOpenModal(true)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
						<div
							className="hover:scale-125 transition-all duration-150 hover:text-cyan-400"
							aria-label="delete-icon"
							onClick={handleDeleteClick}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OrderCard;
