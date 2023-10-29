import CostumerCreateForm from "@/components/Costumers/CostumerCreateForm";
import {
	CostumerContext,
	CostumerContextProps,
} from "@/contexts/costumerContext";
import { screen, render, cleanup } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
const costumerCtxValue = {} as CostumerContextProps;
describe("Costumer Create Form", () => {
	const onCloseFunction = jest.fn();
	const createCostumer = jest.fn();
	beforeEach(() => {
		cleanup();
		render(
			<CostumerContext.Provider
				value={{ ...costumerCtxValue, createCostumer: createCostumer }}
			>
				<CostumerCreateForm isOpen={true} onClose={onCloseFunction} />
			</CostumerContext.Provider>
		);
	});
	test("The name input should start with empty string and be able to type to change its value", async () => {
		const nameInput = screen.getByLabelText("name-input");
		expect(nameInput).toBeInTheDocument();
		expect(nameInput).toHaveValue("");

		await userEvent.type(nameInput, "anthony");
		expect(nameInput).toHaveValue("anthony");
	});
	test("The email input should start with empty string and be able to type to change its value", async () => {
		const emailInput = screen.getByLabelText("email-input");
		expect(emailInput).toBeInTheDocument();
		expect(emailInput).toHaveValue("");

		await userEvent.type(emailInput, "anthony");
		expect(emailInput).toHaveValue("anthony");
	});

	test("The modal should have 3 buttons", async () => {
		const buttons = await screen.findAllByRole("button");
		expect(buttons).toHaveLength(3);
	});
	test("Close button should call onCloseFunction Once", async () => {
		const closeButton = await screen.findByRole("button", {
			name: "close-btn",
		});
		await userEvent.click(closeButton);
		expect(onCloseFunction).toBeCalled();
	});
	test("Create button should call create costumer", async () => {
		const nameInput = screen.getByLabelText("name-input") as HTMLInputElement;
		const emailInput = screen.getByLabelText("email-input") as HTMLInputElement;
		await userEvent.type(nameInput, "anthony");
		await userEvent.type(emailInput, "anthony@anthony.com.br");

		const createButton = await screen.findByRole("button", {
			name: "create-btn",
		});

		await userEvent.click(createButton);
		expect(createCostumer).toBeCalled();
	});
});
