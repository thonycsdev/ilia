import StandardButton from "@/components/Buttons/StandardButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Standard Button Tests", () => {
	const onClickFunctionMock = jest.fn();
	render(<StandardButton onClick={onClickFunctionMock}>Button</StandardButton>);
	test("Should call onClick when the button is clicked", async () => {
		const button = screen.getByRole("button");
		await userEvent.click(button);
		expect(onClickFunctionMock).toBeCalled();
	});
});
