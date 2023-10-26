import CostumerProfile from "@/components/Costumers/CostumerProfile";
import { Costumer } from "@/models/costumer";
import { logRoles, render, screen, waitFor } from "@testing-library/react";

const costumer: Costumer = {
	id: 1,
	createdAt: "2023/11/15",
	name: "Anthony",
	email: "a@a",
	orders: [],
};

jest.autoMockOn();

describe("Costumer profile tests", () => {
	beforeEach(() => {
		const { container } = render(<CostumerProfile costumer={costumer} />);
		logRoles(container);
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
});
