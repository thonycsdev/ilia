import { Costumer, Order } from "@/models/costumer";
import { Product } from "@/models/product";

export function createCostumerArray(amountInTheArray: number) {
	const product: Product[] = Create2ProductsMocks();
	const orders: Order[] = Create2OrdersMockWithProductsMocked(product);
	const expenses: Costumer[] = CreateFullCostumerMock(amountInTheArray, orders);
	return expenses;
}
function CreateFullCostumerMock(
	amountInTheArray: number,
	orders: Order[]
): Costumer[] {
	return Array(amountInTheArray)
		.fill({
			id: 0,
			orders: orders,
		})
		.map((value) => ({ ...value, id: value.id++ }));
}

export function Create2OrdersMockWithProductsMocked(
	product: Product[]
): Order[] {
	return Array(2)
		.fill({ id: 0, products: product })
		.map((order) => ({ ...order, id: order.id++ }));
}

export function Create2ProductsMocks(): Product[] {
	return Array(2)
		.fill({ id: 0, title: "product" })
		.map((product) => ({ ...product, id: product.id++, price: 2 }));
}
