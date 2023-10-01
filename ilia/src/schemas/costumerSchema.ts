import { z } from "zod";

export const createCostumerSchema = z.object({
	email: z
		.string()
		.toLowerCase()
		.nonempty("The email is required to create a costumer"),
	name: z
		.string()
		.nonempty("The name is required to create a costumer")
		.transform((name) => {
			return name
				.trim()
				.split(" ")
				.map((word) => {
					word[0].toUpperCase().concat(word.substring(1));
				})
				.join(" ");
		}),

	createdAt: z.string(),
});
