import { Order } from "@/models/costumer";
import orderRepository from "@/repositories/orderRepository";
import { useRouter } from "next/router";
import { ReactNode, createContext } from "react";

type OrderContextProps = {
	getAllOrders: () => void;
	getSingleOrder: (id: number) => Promise<Order>;
	updateOrder: (id: number) => void;
	deleteOrder: (id: number) => Promise<void>;
	addOrder: (costumer: Order) => Promise<void>;
};

export const OrderContext = createContext({} as OrderContextProps);

type OrderContextProviderProps = {
	children: ReactNode;
};

export const OrderContextProvider = (props: OrderContextProviderProps) => {
	const { children } = props;
	const router = useRouter();
	const { deleteOrder, createOrder, getAllOrders, getSingleOrder } =
		orderRepository();

	const addOrder = async (order: Order) => {
		await createOrder(order);
	};
	const removeOrder = async (orderId: number) => {
		try {
			await deleteOrder(orderId);
			router.push("/orders");
		} catch (error) {
			console.log(error);
		}
	};
	const updateOrder = () => {};
	return (
		<OrderContext.Provider
			value={{
				getSingleOrder,
				getAllOrders,
				addOrder,
				deleteOrder: removeOrder,
				updateOrder,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
