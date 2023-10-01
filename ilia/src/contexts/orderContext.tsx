import { Order } from "@/models/costumer";
import orderRepository from "@/repositories/orderRepository";
import { ReactNode, useState, createContext, useEffect } from "react";
import { useQuery, useMutation, MutationFunction } from "react-query";

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
	const [orders, setOrders] = useState<Order[]>([]);
	const { createOrder, getAllOrders, getSingleOrder } = orderRepository();
	const { data } = useQuery({ queryFn: getAllOrders, queryKey: ["ordersKey"] });
	const { mutate, isLoading } = useMutation({
		mutationFn: createOrder as MutationFunction,
		mutationKey: ["orderKey"],
	});

	useEffect(() => {
		console.log(data);
		if (data) {
			setOrders(data.data);
		}
	}, []);
	const addOrder = (order: Order) => {
		mutate(order);
	};
	const deleteOrder = () => {};
	const updateOrder = () => {};
	return (
		<OrderContext.Provider
			value={{
				orders,
				getSingleOrder,
				getAllOrders,
				addOrder,
				deleteOrder,
				updateOrder,
				isLoading,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
