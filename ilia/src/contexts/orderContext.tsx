import { orderFactory } from "@/factories/orderFactory";
import { Order } from "@/models/costumer";
import { ReactNode, useState, createContext, useEffect } from "react";

type OrderContextProps = {
	orders: Order[];
	getOrders: () => void;
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
	const { orderService } = orderFactory();
	useEffect(() => {
		getOrders();
	}, []);

	const getOrders = () => {
		orderService.getOrders().then((result) => setOrders(result.data));
	};
	const createOrder = (Order: Order) => {
		orderService.createOrder(Order);
		getOrders();
	};
	const deleteOrder = () => {};
	const updateOrder = () => {};
	const getSingleOrder = (id: number) => {
		const response = orderService.getSingleOrder(id);
		return response;
	};

	return (
		<OrderContext.Provider
			value={{
				orders,
				getSingleOrder,
				getOrders,
				createOrder,
				deleteOrder,
				updateOrder,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
