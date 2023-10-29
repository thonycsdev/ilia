import { formatDateToBrazilFormat } from "@/functions/formatDate";
import { Costumer } from "@/models/costumer";
import React, { useContext } from "react";
import TableItemDeleteButton from "../Buttons/TableItemDeleteButton";
import TableItemUpdateButton from "../Buttons/TableItemUpdateButton";
import { CostumerContext } from "@/contexts/costumerContext";

type TableItemProps = {
	costumer: Costumer;
};
//futuramente onClick levar para o detalhamento do costumer
function TableItem({ costumer }: TableItemProps) {
	const { deleteCostumer } = useContext(CostumerContext);
	const handleDelete = async () => {
		await deleteCostumer(costumer.id!);
	};
	return (
		<>
			<tr className="odd:bg-white even:bg-slate-50">
				<td className="px-6 py-4 text-sm font-medium text-slate-900">
					{costumer.name}
				</td>
				<td className="px-6 py-4 text-sm text-slate-900">
					{costumer.orders!.length}
				</td>
				<td className="px-6 py-4 text-sm text-slate-900">
					{formatDateToBrazilFormat(new Date(costumer.createdAt!))}
				</td>
				<td className="text-sm text-slate-900 flex gap-11 mt-3">
					<TableItemDeleteButton onDelete={handleDelete} />
					<TableItemUpdateButton costumer={costumer} />
				</td>
			</tr>
		</>
	);
}

export default TableItem;
