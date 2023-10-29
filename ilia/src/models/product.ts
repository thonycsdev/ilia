import { z } from "zod";

export type Product = z.infer<typeof ProductSchema>;

export type Rating = {
	rate: number;
	count: number;
};

export const ProductSchema = z.object({
	id: z.number(),
	title: z.string(),
	price: z.number(),
	image: z.string(),
	description: z.string(),
	category: z.string(),
	rating: z.object({
		rate: z.number(),
		count: z.number(),
	}),
});
