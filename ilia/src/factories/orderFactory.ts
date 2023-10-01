import OrderRepository from "@/infra/orderRepository";
import { OrderService } from "@/service/orderService";

export function orderFactory() {
	const orderRepository = new OrderRepository();
	const orderService = new OrderService(orderRepository);
	return { orderRepository, orderService };
}
