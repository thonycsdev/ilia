export class Checks {
	private _input: string = "";
	private readonly _regexEmail =
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	private readonly _regexName = /^(?:\d+|\s*|.{0,2})$/;
	private readonly _regexFindNumber = /[-]?(\d+\.?(?:\d+)?(?:[eE][-]?\d+)?)/;

	constructor() {}

	createCheck(input: string): Checks {
		const check = new Checks();
		check._input = input;
		return check;
	}

	checkInputEmail() {
		if (!this._regexEmail.test(this._input)) {
			throw new Error("Invalid Email Address");
		}
	}
	checkInputName() {
		if (
			this._regexName.test(this._input) ||
			this._regexFindNumber.test(this._input)
		)
			throw new Error("Invalid Name");
	}
}
