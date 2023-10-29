import Filter from "@/components/Filter/Filter";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Filter tests", () => {
	const handleSearchTerm = jest.fn();
	beforeEach(() => {
		cleanup();
		render(<Filter onUserTyping={handleSearchTerm} />);
	});

	test("Input should be empty in the first render", () => {
		const input = screen.getByPlaceholderText("Search Here");
		expect(input).toBeInTheDocument();
		expect(input).toHaveValue("");
	});
	test("When the input is empty Clear Filter button should be disabled", async () => {
		const button = screen.getByRole("button");
		expect(button).toBeDisabled();
	});
	test("When user has typed something the button should be enabled", async () => {
		const input = screen.getByPlaceholderText("Search Here");
		await userEvent.type(input, "Anthony");
		const button = screen.getByRole("button");
		expect(button).toBeEnabled();
	});
	test("Should call the lift state function with what was typed", async () => {
		const input = screen.getByPlaceholderText("Search Here");
		await userEvent.type(input, "A");
		expect(handleSearchTerm).toBeCalled();
		expect(handleSearchTerm).toBeCalledWith("A");
	});

	test("When user clicks the button, the input is cleared", async () => {
		const input = screen.getByPlaceholderText("Search Here");
		await userEvent.type(input, "Anthony");
		const button = screen.getByRole("button");
		await userEvent.click(button);

		expect(input).toHaveValue("");
	});
});
