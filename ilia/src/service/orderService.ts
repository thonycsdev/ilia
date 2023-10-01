import OrderRepository from "@/infra/orderRepository";
import { Order } from "@/models/costumer";

export class OrderService {
	private readonly orderRepository: OrderRepository;
	constructor(orderRepository: OrderRepository) {
		this.orderRepository = orderRepository;
	}

	getOrders() {
		return this.orderRepository.getAllOrders();
	}
	createOrder(order: Order) {
		this.orderRepository.createOrder(order);
	}
	getSingleOrder(id: number) {
		return this.orderRepository.GetSingleOrder(id);
	}

	updateOrder() {}
}
