import CartQuickAcessIcon from "@/components/Cart/CartQuickAcessIcon";
import { render, screen } from "@testing-library/react";
import { Create2ProductsMocks } from "../../mocks/mockCostumers";

describe("Cart Quick Access Icon", () => {
	const totalCartValue = 4;
	const cartItensNumber = 2;
	beforeEach(() => {
		const cartItens = Create2ProductsMocks();
		render(<CartQuickAcessIcon cartItens={cartItens} />);
	});

	test("Should return the total amount based on cartItens mock 4", async () => {
		const value = await screen.findByText(totalCartValue, { exact: false });
		expect(value).toBeInTheDocument();
	});
	test("Should return the total os itens  cartItens mock", async () => {
		const value = await screen.findByText(cartItensNumber, { exact: false });
		expect(value).toBeInTheDocument();
	});
});
