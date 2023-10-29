import { z } from "zod";
import { OrderSchema } from "./order";

export const CostumerSchema = z
	.object({
		id: z.number().optional(),
		createdAt: z.date().optional(),
		name: z.string().trim().min(4, {
			message: "The name should have at least 4 characters",
		}),
		email: z.string().email().trim().toLowerCase(),
	})
	.extend({ orders: OrderSchema.array().optional() });

export type Costumer = z.infer<typeof CostumerSchema>;

export type Order = z.infer<typeof OrderSchema>;

// type costumerTest = z.infer<typeof CostumerSchema>
