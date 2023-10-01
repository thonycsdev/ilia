import { Costumer } from "@/models/costumer";

export class ChecksCostumerInputs {
	private _input: Costumer = {} as Costumer;
	private readonly _regexEmail =
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	private readonly _regexName = /^(?:\d+|\s*|.{0,2})$/;
	private readonly _regexFindNumber = /[-]?(\d+\.?(?:\d+)?(?:[eE][-]?\d+)?)/;

	constructor() {}

	createCheck(input: Costumer): ChecksCostumerInputs {
		const check = new ChecksCostumerInputs();
		check._input = input;
		return check;
	}

	checkInputEmail() {
		if (!this._regexEmail.test(this._input.email)) {
			throw new Error("Invalid Email Address");
		}
	}
	checkInputName() {
		if (
			this._regexName.test(this._input.name) ||
			this._regexFindNumber.test(this._input.name)
		)
			throw new Error("Invalid Name");
	}
}
