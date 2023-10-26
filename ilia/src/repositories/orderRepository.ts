import { constantsApi } from "@/constants/constantsApi";
import { Order } from "@/models/costumer";
import https from "https";
import axios from "axios";

export default function orderRepository() {
	const agent = new https.Agent({
		rejectUnauthorized: false, // This allows self-signed certificates
	});
	function createOrder(order: Order) {
		return axios.post(constantsApi.ApiKey + "/Order", order);
	}
	function getAllOrders() {
		const response = axios.get(constantsApi.ApiKey + "/getAllOrders", {
			httpsAgent: agent,
		});
		return response.then((data) => data.data);
	}

	function getSingleOrder(orderId: number) {
		const response = axios.get(constantsApi.ApiKey + "/Order", {
			params: { id: orderId },
		});
		return response.then((result) => result.data);
	}

	return { createOrder, getAllOrders, getSingleOrder };
}
