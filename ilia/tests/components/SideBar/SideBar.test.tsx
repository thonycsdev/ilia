import SideBar from "@/components/SideBar/SideBar";
import { render, screen } from "@testing-library/react";

describe("Side bar tests", () => {
	render(<SideBar />);
	test("Should have at least 2 items in the nav itens", async () => {
		const links = await screen.findAllByRole("link");
		expect(links.length).toBeGreaterThanOrEqual(1);
	});
});
