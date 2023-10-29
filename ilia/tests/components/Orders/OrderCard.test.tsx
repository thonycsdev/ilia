import OrderCard from "@/components/Cards/OrderCard";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { orderMock } from "../../mocks/orderMock";
import userEvent from "@testing-library/user-event";
import { OrderContext, OrderContextProps } from "@/contexts/orderContext";
import { costumer } from "../../mocks/costumerMock";

const orderCtxValueMock: OrderContextProps = {} as OrderContextProps;

describe("Order Card Details", () => {
	const deleteOrderMockFunction = jest.fn();
	beforeEach(() => {
		render(
			<OrderContext.Provider
				value={{ ...orderCtxValueMock, deleteOrder: deleteOrderMockFunction }}
			>
				<OrderCard order={orderMock} costumer={costumer} />
			</OrderContext.Provider>
		);
	});
	test("Should model the modal with details on eye icon click", async () => {
		const eyeIconButton = screen.getByLabelText("eye-details");
		await userEvent.click(eyeIconButton);
		const orderDetailsModal = screen.queryByText("Order Details");
		expect(orderDetailsModal).toBeInTheDocument();
	});

	test("Should call delete function from context when trash icon is clicked", async () => {
		const deleteIconButton = screen.getByLabelText("delete-icon");
		await userEvent.click(deleteIconButton);
		expect(deleteOrderMockFunction).toBeCalled();
		expect(deleteOrderMockFunction).toBeCalledWith(orderMock.id);
	});

	test("Should call the fail toast when the request failed", async () => {
		cleanup();
		const failToastMock = jest.fn();

		jest.mock("../../../src/components/Toast/Toast.ts", () => {
			return {
				failToast: failToastMock,
			};
		});

		const deleteOrderMockFunctionFailed = jest.fn().mockRejectedValue({});

		render(
			<OrderContext.Provider
				value={{
					...orderCtxValueMock,
					deleteOrder: deleteOrderMockFunctionFailed,
				}}
			>
				<OrderCard order={orderMock} costumer={costumer} />
			</OrderContext.Provider>
		);

		const deleteIconButton = screen.getByLabelText("delete-icon");
		await userEvent.click(deleteIconButton);
		waitFor(() => expect(failToastMock).toBeCalled());
	});
});
