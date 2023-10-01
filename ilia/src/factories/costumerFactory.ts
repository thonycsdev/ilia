import CostumerRepository from "@/infra/customerRepository";
import CostumerService from "@/service/costumerService";

export function costumerFactory() {
	const costumerRepository = new CostumerRepository();
	const costumerService = new CostumerService(costumerRepository);
	return { costumerService, costumerRepository };
}
