import { z } from "zod";

export const createCostumerSchema = z.object({
	email: z
		.string()
		.toLowerCase()
		.nonempty("The email is required to create a costumer"),
	name: z.string().nonempty("The name is required to create a costumer"),

	createdAt: z.coerce.date(),
});
