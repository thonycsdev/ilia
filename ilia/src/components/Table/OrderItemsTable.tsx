import React from "react";
import OrderItem from "./OrderItem";
import { Product } from "@/models/product";

type OrderItemsTableProps = {
	products: Product[];
};

function OrderItemsTable({ products }: OrderItemsTableProps) {
	return (
		<table className="shadow-md overflow-hidden mx-auto mt-5 rounded-md table-auto">
			<thead className="bg-slate-100 border-b border-slate-200">
				<tr>
					<th className=" px-6 font-bold py-3 text-left text-sm w-1/4 text-slate-900 rounded-tl-md">
						Name
					</th>
					<th className="px-6 py-3 text-left text-sm font-bold text-slate-900">
						Description
					</th>
					<th className="px-6 py-3 text-left text-sm font-bold text-slate-900 rounded-tr-md">
						Price
					</th>
					<th className="px-6 py-3 text-left text-sm font-bold text-slate-900 rounded-tr-md">
						Category
					</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product) => (
					<OrderItem product={product} key={product.id} />
				))}
			</tbody>
		</table>
	);
}

export default OrderItemsTable;
