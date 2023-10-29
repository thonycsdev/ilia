import CartQuickAcessIcon from "@/components/Cart/CartQuickAcessIcon";
import { render, screen } from "@testing-library/react";
import { Create2ProductsMocks } from "../../mocks/mockCostumers";

describe("Cart Quick Access Icon", () => {
	const totalCartValue = 4;
	const cartItemsNumber = 2;
	beforeEach(() => {
		const cartItems = Create2ProductsMocks();
		render(<CartQuickAcessIcon cartItems={cartItems} />);
	});

	test("Should return the total amount based on cartItems mock 4", async () => {
		const value = await screen.findByText(totalCartValue, { exact: false });
		expect(value).toBeInTheDocument();
	});
	test("Should return the total os itens  cartItems mock", async () => {
		const value = await screen.findByText(cartItemsNumber, { exact: false });
		expect(value).toBeInTheDocument();
	});
});
