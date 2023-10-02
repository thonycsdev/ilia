import { checkDate } from "@/functions/checkDate";
import { Costumer } from "@/models/costumer";

describe("Check Date Test", () => {
	it("should return a date object when the initial is null or undefined", () => {
		const costumer: Costumer = {
			id: 0,
			createdAt: "",
			name: "",
			email: "",
			orders: [],
		};
		checkDate(costumer);

		expect(costumer.createdAt.length).not.toBeLessThanOrEqual(0);
	});
});
