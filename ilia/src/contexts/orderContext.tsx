import { Order } from "@/models/costumer";
import orderRepository from "@/repositories/orderRepository";
import { ReactNode, createContext } from "react";
import { useQuery, MutationFunction } from "react-query";
import { createMutation } from "./mutation/mutation";

type OrderContextProps = {
	orders: Order[];
	getAllOrders: () => void;
	getSingleOrder: (id: number) => Promise<Order>;
	updateOrder: (id: number) => void;
	deleteOrder: (id: number) => void;
	addOrder: (costumer: Order) => void;
	isLoading: boolean;
};

export const OrderContext = createContext({} as OrderContextProps);

type OrderContextProviderProps = {
	children: ReactNode;
};

export const OrderContextProvider = (props: OrderContextProviderProps) => {
	const { children } = props;
	const { createOrder, getAllOrders, getSingleOrder } = orderRepository();
	const { data, isSuccess } = useQuery({
		queryFn: getAllOrders,
		queryKey: ["ordersKey"],
	});
	const { mutate } = createMutation(createOrder as MutationFunction, "orders");

	const addOrder = (order: Order) => {
		mutate(order);
	};
	const deleteOrder = () => {};
	const updateOrder = () => {};
	return (
		<OrderContext.Provider
			value={{
				orders: data,
				getSingleOrder,
				getAllOrders,
				addOrder,
				deleteOrder,
				updateOrder,
				isLoading: isSuccess,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
