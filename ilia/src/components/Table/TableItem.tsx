import { formatDateToBrazilFormat } from "@/functions/formatDate";
import { Costumer } from "@/models/costumer";
import React from "react";

type TableItemProps = {
	costumer: Costumer;
};

function TableItem({ costumer }: TableItemProps) {
	return (
		<tr className="odd:bg-white even:bg-slate-50">
			<td className="px-6 py-4 text-sm font-medium text-slate-900">
				{costumer.name}
			</td>
			<td className="px-6 py-4 text-sm text-slate-900">
				{costumer.orders.length}
			</td>
			<td className="px-6 py-4 text-sm text-slate-900">
				{formatDateToBrazilFormat(new Date(costumer.createdAt))}
			</td>
		</tr>
	);
}

export default TableItem;
