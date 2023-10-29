import OrderDetailsModal from "@/components/Orders/OrderDetailsModal";
import { render, screen } from "@testing-library/react";
import { Order } from "@/models/costumer";
import userEvent from "@testing-library/user-event";
import { costumer } from "../../mocks/costumerMock";

const orderMock: Order = {
	id: 101,
	createdAt: new Date("11/15/2023"),
	customerId: 1,
	products: [
		{
			id: 201,
			title: "Sample Product 1",
			price: 19.99,
			image: "product1.jpg",
			description: "This is a sample product 1 description.",
			category: "Sample Category 1",
			rating: {
				rate: 4.2,
				count: 50,
			},
		},
	],
};

describe("Order Details Modal", () => {
	const onCloseFunction = jest.fn();
	beforeEach(() => {
		render(
			<OrderDetailsModal
				costumer={costumer}
				isOpen={true}
				onClose={onCloseFunction}
				order={orderMock}
			/>
		);
	});

	test("Should have to correct order details", () => {
		const orderId = screen.getByText("101");
		const orderDate = screen.getByText("15/11/2023");
		const orderTotalPrice = screen.getByTestId("order-sum-price");
		expect(orderId).toBeInTheDocument();
		expect(orderDate).toBeInTheDocument();
		expect(orderTotalPrice).toBeInTheDocument();
	});

	test("Should render the table", () => {
		const table = screen.getByRole("table");
		expect(table).toBeInTheDocument();
	});

	test("Should render the correct amount of roles", () => {
		const tableRows = screen.getAllByRole("row");
		expect(tableRows).toHaveLength(2);
	});

	test("Should render product title", () => {
		const productTitle = screen.getByText("Sample Product 1");
		expect(productTitle).toBeInTheDocument();
	});
	test("Should product description", () => {
		const productDescription = screen.getByText(
			"This is a sample product 1 description."
		);
		expect(productDescription).toBeInTheDocument();
	});
	test("Should product Category", () => {
		const productDescription = screen.getByText("Sample Category 1");
		expect(productDescription).toBeInTheDocument();
	});

	test("Should call onClose function when click close buttons", async () => {
		const button = screen.getByRole("button", {
			name: "Close",
		});
		await userEvent.click(button);
		expect(onCloseFunction).toBeCalled();
	});
});
