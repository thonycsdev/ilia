import { Order } from "@/models/costumer";
import orderRepository from "@/repositories/orderRepository";
import { ReactNode, useState, createContext, useEffect } from "react";

type OrderContextProps = {
	orders: Order[];
	getAllOrders: () => void;
	getSingleOrder: (id: number) => Promise<Order>;
	updateOrder: (id: number) => void;
	deleteOrder: (id: number) => void;
	createOrder: (costumer: Order) => void;
};

export const OrderContext = createContext({} as OrderContextProps);

type OrderContextProviderProps = {
	children: ReactNode;
};

export const OrderContextProvider = (props: OrderContextProviderProps) => {
	const { children } = props;
	const [orders, setOrders] = useState<Order[]>([]);
	const { createOrder, getAllOrders, getSingleOrder } = orderRepository();
	useEffect(() => {
		console.log(setOrders);
	}, []);
	const deleteOrder = () => {};
	const updateOrder = () => {};
	return (
		<OrderContext.Provider
			value={{
				orders,
				getSingleOrder,
				getAllOrders,
				createOrder,
				deleteOrder,
				updateOrder,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
