import Costumers from "@/components/Costumers/Costumers";
import {
	CostumerContext,
	CostumerContextProps,
} from "@/contexts/costumerContext";
import { Costumer } from "@/models/costumer";
import { cleanup, render, screen } from "@testing-library/react";
import { createCostumerArray } from "../mocks/mockCostumers";

describe("Costumers Home Page Test", () => {
	const ctxValues = {} as CostumerContextProps;
	const costumersMock: Costumer[] = createCostumerArray(10);
	render(
		<CostumerContext.Provider
			value={{ ...ctxValues, costumers: costumersMock }}
		>
			<Costumers costumers={costumersMock} />
		</CostumerContext.Provider>
	);
	afterEach(() => {
		cleanup();
	});
	test("Should render cards based on the current number of costumers in the array", async () => {
		const cards = await screen.findAllByRole("row");
		//adicionando + 1 por conta da header da table contar tbm na length
		expect(cards.length).toBe(costumersMock.length + 1);
	});
});
