import { constantsApi } from "@/constants/constantsApi";
import { Order } from "@/models/costumer";
import axios from "axios";

export default class OrderRepository {
	private readonly apiKey = constantsApi.ApiKey!;
	createOrder(order: Order) {
		axios.post(this.apiKey + "/Order", order);
	}
	getAllOrders() {
		const response = axios.get(this.apiKey + "/getAllOrders");
		return response;
	}

	GetSingleOrder(orderId: number) {
		const response = axios.get(this.apiKey + "/Order", {
			params: { id: orderId },
		});
		return response.then((result) => result.data);
	}
}
