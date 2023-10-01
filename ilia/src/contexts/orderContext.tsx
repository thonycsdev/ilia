import { Order } from "@/models/costumer";
import orderRepository from "@/repositories/orderRepository";
import { ReactNode, useState, createContext, useEffect } from "react";
import { useQuery } from "react-query";

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
	const { data } = useQuery({ queryFn: getAllOrders, queryKey: ["ordersKey"] });
	useEffect(() => {
		console.log(data);
		if (data) {
			setOrders(data.data);
		}
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
