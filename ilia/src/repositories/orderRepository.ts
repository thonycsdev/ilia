import { constantsApi } from "@/constants/constantsApi";
import { Order } from "@/models/costumer";
import https from "https";
import axios from "axios";

export default function orderRepository() {
	const agent = new https.Agent({
		rejectUnauthorized: false, // This allows self signed certificates
	});
	function createOrder(order: Order) {
		const payload = {
			...order,
			products: order.products.map((product) => ({
				...product,
				rating: product.rating.rate,
			})),
		};
		return axios.post(constantsApi.ApiKey + "/Order", payload);
	}
	function getAllOrders() {
		const response = axios.get(constantsApi.ApiKey + "/getAllOrders", {
			httpsAgent: agent,
		});
		return response.then((data) => data.data);
	}
	async function deleteOrder(orderId: number) {
		await axios.delete(constantsApi.ApiKey + "/Order", {
			params: {
				orderId,
			},
		});
	}

	function getSingleOrder(orderId: number) {
		const response = axios.get(constantsApi.ApiKey + "/Order", {
			params: { id: orderId },
		});
		return response.then((result) => result.data);
	}

	return { createOrder, getAllOrders, getSingleOrder, deleteOrder };
}
