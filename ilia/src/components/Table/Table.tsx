import React from "react";
import TableItem from "./TableItem";
import { Costumer } from "@/models/costumer";
type TableProps = {
	costumers: Costumer[];
};

// Faltou fazer paginacao, seria mt legal ter.
//Table tem o mesmo nome que o componente do chakra UI, cuidado ao importar esse aqui.

function Table({ costumers }: TableProps) {
	return (
		<table className="shadow-md w-3/4 mx-auto mt-14 rounded-md table-auto">
			<thead className="bg-slate-100 border-b border-slate-200">
				<tr>
					<th className=" px-6 font-bold py-3 text-left text-sm text-slate-900 rounded-tl-md">
						Name
					</th>
					<th className="px-6 py-3 text-left text-sm font-bold text-slate-900">
						Orders
					</th>
					<th className="px-6 py-3 text-left text-sm font-bold text-slate-900 rounded-tr-md">
						Created Date
					</th>
					<th className="px-6 py-3 text-left text-sm font-bold text-slate-900 rounded-tr-md"></th>
				</tr>
			</thead>
			<tbody>
				{costumers.map((costumer) => (
					<TableItem costumer={costumer} key={costumer.id} />
				))}
			</tbody>
		</table>
	);
}

export default Table;
