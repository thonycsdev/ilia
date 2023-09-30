export type Costumer = {
	id: number;
	createdAt: string;
	name: string;
	email: string;
	orders: Order[];
};

type Order = {
	id: number;
	createdAt: string;
	customerId: number;
};
