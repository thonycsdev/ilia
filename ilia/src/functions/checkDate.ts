import { Costumer, Order } from "@/models/costumer";

export function checkDate(entity: Costumer | Order) {
	if (!entity.createdAt || entity.createdAt.length === 0) return new Date();
	return new Date(entity.createdAt);
}
