export type Product = {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
	rating: Rating;
};

export type Rating = {
	rate: number;
	count: number;
};
