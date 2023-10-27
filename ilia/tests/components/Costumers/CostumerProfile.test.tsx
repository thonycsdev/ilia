import CostumerProfile from "@/components/Costumers/CostumerProfile";
import { Costumer } from "@/models/costumer";
import { render, screen, waitFor } from "@testing-library/react";

const costumer: Costumer = {
	id: 1,
	createdAt: "2023/11/15",
	name: "Anthony",
	email: "a@a",
	orders: [
		{
			createdAt: "2023/11/15",
			customerId: 1,
			id: 1,
			products: 1,
		},
	],
};

jest.autoMockOn();

describe("Costumer profile tests", () => {
	beforeEach(() => {
		render(<CostumerProfile costumer={costumer} />);
	});
	test("Should render both buttons, delete and update", async () => {
		const buttons = await screen.findAllByRole("button");

		const update = await screen.queryByRole("button", {
			name: /update/i,
		});

		const deleteBtn = await screen.queryByRole("button", {
			name: /delete/i,
		});

		waitFor(() => {
			expect(deleteBtn).toBeInTheDocument();
		});
		waitFor(() => {
			expect(update).toBeInTheDocument();
		});

		waitFor(() => {
			expect(buttons).toHaveLength(2);
			buttons.forEach((button) => {
				expect(button).toBeEnabled();
			});
		});
	});

	test("Should render the costumer infos", async () => {
		const costumerName = await screen.findByText("Nome:");
		const costumerEmail = await screen.findByText("Email:");
		const costumerCreatedDate = await screen.findByText("Created At:");

		expect(costumerName).toBeInTheDocument();
		waitFor(() => {
			expect(costumerName).toHaveValue("Anthony");
		});

		expect(costumerEmail).toBeInTheDocument();
		waitFor(() => {
			expect(costumerEmail).toHaveValue("a@a");
		});
		expect(costumerCreatedDate).toBeInTheDocument();
		waitFor(() => {
			expect(costumerCreatedDate).toHaveValue("2023/11/15");
		});
	});

	test("Should render the only order available", async () => {
		const orderId = await screen.findByText("Order Id:");
		const productId = await screen.findByText("Product Id:");

		expect(orderId).toBeInTheDocument();
		expect(productId).toBeInTheDocument();
	});
});
