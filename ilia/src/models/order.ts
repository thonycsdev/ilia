import { z } from "zod";
import { ProductSchema } from "./product";

export const OrderSchema = z
	.object({
		id: z.number().optional(),
		createdAt: z.date(),
		customerId: z.number(),
	})
	.extend({
		products: ProductSchema.array(),
	});
