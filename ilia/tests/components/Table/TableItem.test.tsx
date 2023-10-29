import { render, screen } from "@testing-library/react";
import { createCostumerArray } from "../../mocks/mockCostumers";
import TableItem from "@/components/Table/TableItem";

describe("Table Item Tests", () => {
	const costumer = createCostumerArray(1)[0];
	costumer.name = "Anthony";
	costumer.orders = [];
	costumer.email = "a@a";
	costumer.createdAt = new Date("11/15/2023");
	render(
		<table>
			<tbody>
				<TableItem costumer={costumer} />
			</tbody>
		</table>
	);
	test("Should render the correct information given an costumer", async () => {
		const name = screen.getByRole("cell", {
			name: "Anthony",
		});
		const email = screen.getByRole("cell", {
			name: "0",
		});

		//Mes e dia estao alterados pois no table item a data eh formatada para pt-br
		const createdAt = screen.getByRole("cell", {
			name: "15/11/2023",
		});

		expect(name).toBeInTheDocument();
		expect(email).toBeInTheDocument();
		expect(createdAt).toBeInTheDocument();
	});
});
