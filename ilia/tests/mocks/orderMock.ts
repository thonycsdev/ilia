import { Order } from "@/models/costumer";

export const orderMock: Order = {
	id: 101,
	createdAt: "2023-10-27T15:30:00Z",
	customerId: 1,
	customer: {
		id: 1,
		createdAt: "2023-10-28T10:00:00Z",
		name: "John Doe",
		email: "johndoe@example.com",
		orders: [],
	},
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
