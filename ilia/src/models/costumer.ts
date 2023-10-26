export type Costumer = {
	id: number;
	createdAt: string | Date;
	name: string;
	email: string;
	orders: Order[];
};

export type Order = {
	id: number;
	createdAt: string;
	customerId: number;
	productId: number;
};
