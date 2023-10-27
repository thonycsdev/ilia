import { Order } from "@/models/costumer";
import orderRepository from "@/repositories/orderRepository";
import { ReactNode, createContext } from "react";
import { useQuery } from "react-query";

type OrderContextProps = {
	orders: Order[];
	getAllOrders: () => void;
	getSingleOrder: (id: number) => Promise<Order>;
	updateOrder: (id: number) => void;
	deleteOrder: (id: number) => void;
	addOrder: (costumer: Order) => Promise<void>;
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

	const addOrder = async (order: Order) => {
		await createOrder(order);
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
