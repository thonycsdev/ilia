import Card from "@/components/Cards/Card";
import { cleanup, logRoles, render, screen } from "@testing-library/react";
import { createCostumerArray } from "../../mockData/mockCostumers";

describe("Single Card tests", () => {
	const { container } = render(<Card costumer={createCostumerArray(1)[0]} />);
	logRoles(container);
	afterEach(() => {
		cleanup();
	});
	test("The card should render when passed a costumer", async () => {
		const card = await screen.getByRole("link");
		expect(card).toBeInTheDocument();
	});
});
