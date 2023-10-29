import { Order } from "@/models/costumer";

export const orderMock: Order = {
	id: 101,
	createdAt: new Date(),
	customerId: 1,
	products: [
		{
			id: 201,
			title: "Sample Product 1",
			price: 19.99,
			image: "product1.jpg",
			description: "This is a sample product 1 description.",
			category: "Sample Category 1",
			rating: {
				rate: 4.2,
				count: 50,
			},
		},
	],
};
