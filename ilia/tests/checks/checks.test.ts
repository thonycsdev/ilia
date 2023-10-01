import { ChecksCostumerInputs } from "@/checks/checks";
import { Costumer } from "@/models/costumer";

describe("Checks tests", () => {
	let costumer: Costumer;

	beforeEach(() => {
		costumer = {
			id: 0,
			createdAt: "",
			name: "",
			email: "",
			orders: [],
		};
	});
	const emailTestCases = [
		{ input: "invalidExample.com", expected: true },
		{ input: "invalid-email", expected: false },
		{ input: "another.invalidEmail.com", expected: true },
	];

	const invalidNamesTestCases = [
		{ input: "1" },
		{ input: "D" },
		{ input: " " },
		{ input: "" },
		{ input: "123abc" },
	];

	const validNamesTestCases = [
		{ input: "Anthony" },
		{ input: "Copo" },
		{ input: "Alexandre" },
		{ input: "Matheus" },
		{ input: "Ana" },
	];

	emailTestCases.forEach(({ input }) => {
		it(`should throw an error when a email is not valid`, () => {
			costumer.email = input;
			const check = new ChecksCostumerInputs().createCheck(costumer);
			expect(() => check.checkInputEmail()).toThrow();
		});
	});

	invalidNamesTestCases.forEach(({ input }) => {
		it(`The name ${input} should throw `, () => {
			costumer.name = input;
			const check = new ChecksCostumerInputs().createCheck(costumer);
			expect(() => check.checkInputName()).toThrow();
		});
	});

	validNamesTestCases.forEach(({ input }) => {
		it(`The name ${input} should pass`, () => {
			costumer.name = input;
			const check = new ChecksCostumerInputs().createCheck(costumer);
			expect(() => check.checkInputName()).not.toThrow();
		});
	});
});
