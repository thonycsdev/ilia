import { ChecksCostumerInputs } from "@/checks/checks";
import CostumerRepository from "@/infra/customerRepository";
import CostumerService from "@/service/costumerService";

export function costumerFactory() {
	const costumerRepository = new CostumerRepository();
	const costumerService = new CostumerService(costumerRepository);
	const costumerCheck = new ChecksCostumerInputs();
	return { costumerService, costumerRepository, costumerCheck };
}
