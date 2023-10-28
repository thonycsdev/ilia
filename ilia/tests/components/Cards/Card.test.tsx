import { cleanup, render, screen } from "@testing-library/react";
// import { createCostumerArray } from "../../mocks/mockCostumers";

describe.skip("Single Card tests", () => {
	render(<></>);
	afterEach(() => {
		cleanup();
	});
	test("The card should render when passed a costumer", async () => {
		const card = await screen.getByRole("link");
		expect(card).toBeInTheDocument();
	});
});
