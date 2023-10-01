import { ChecksCostumerInputs } from "@/checks/checks";

export function costumerFactory() {
	const costumerCheck = new ChecksCostumerInputs();
	return { costumerCheck };
}
