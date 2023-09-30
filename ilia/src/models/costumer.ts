export type Costumer = {
	id: number;
	createdAt: string;
	name: string;
	email: string;
	orders: Order[];
};

export type Order = {
	id: number;
	createdAt: string;
	customerId: number;
};
