import { Costumer } from "@/models/costumer";

export function createCostumerArray(amountInTheArray: number) {
	const expenses: Costumer[] = Array(amountInTheArray)
		.fill({
			id: 0,
			orders: [],
		})
		.map((value) => ({ ...value, id: value.id++ }));
	return expenses;
}
