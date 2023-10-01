import { Checks } from "@/checks/checks";

describe("Checks tests", () => {
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
			const check = new Checks().createCheck(input);
			expect(() => check.checkInputEmail()).toThrow();
		});
	});

	invalidNamesTestCases.forEach(({ input }) => {
		it(`The name ${input} should throw `, () => {
			const check = new Checks().createCheck(input);
			expect(() => check.checkInputName()).toThrow();
		});
	});

	validNamesTestCases.forEach(({ input }) => {
		it(`The name ${input} should pass`, () => {
			const check = new Checks().createCheck(input);
			expect(() => check.checkInputName()).not.toThrow();
		});
	});
});
