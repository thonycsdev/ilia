import { formatCurrency } from "@/functions/formatCurrency";
import { Product } from "@/models/product";
import React from "react";

type OrderItem = {
	product: Product;
};

function OrderItem({ product }: OrderItem) {
	return (
		<>
			<tr className="odd:bg-white even:bg-slate-50">
				<td className="px-6 py-4 text-sm font-medium  text-slate-900">
					{product.title}
				</td>
				<td className="px-6 py-4 overflow-hidden max-w-md  text-sm text-slate-900">
					{product.description}
				</td>
				<td className="px-6 py-4 text-sm text-slate-900">
					{formatCurrency(product.price)}
				</td>
				<td className="text-sm text-slate-900 flex gap-11 mt-3">
					{product.category}
				</td>
			</tr>
		</>
	);
}

export default OrderItem;
