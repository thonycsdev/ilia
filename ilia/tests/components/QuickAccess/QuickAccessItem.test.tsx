import QuickAccessItem from "@/components/QuickAccess/QuickAccessItem";
import { render, screen } from "@testing-library/react";

describe("Quick Access Item Tests", () => {
	const itemName = "Total Costumers";
	beforeEach(() => {
		render(<QuickAccessItem itemName={itemName} value={1234} />);
	});
	test("Should render the correct information about receive item", async () => {
		const spanText = await screen.getByText(itemName);
		const spanValue = await screen.getByText("1234");
		expect(spanText).toBeInTheDocument();
		expect(spanValue).toBeInTheDocument();
	});
});
