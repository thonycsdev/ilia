import { constantsApi } from "@/constants/constantsApi";
import { Order } from "@/models/costumer";
import axios from "axios";

export default function orderRepository() {
	function createOrder(order: Order) {
		axios.post(constantsApi.ApiKey + "/Order", order);
	}
	function getAllOrders() {
		const response = axios.get(constantsApi.ApiKey + "/getAllOrders");
		return response;
	}

	function getSingleOrder(orderId: number) {
		const response = axios.get(constantsApi.ApiKey + "/Order", {
			params: { id: orderId },
		});
		return response.then((result) => result.data);
	}

	return { createOrder, getAllOrders, getSingleOrder };
}
