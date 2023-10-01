import CostumerRepository from "@/infra/customerRepository";
import { Costumer } from "@/models/costumer";

export default class CostumerService {
	private readonly costumerRepository: CostumerRepository;

	constructor(costumerRepository: CostumerRepository) {
		this.costumerRepository = costumerRepository;
	}

	getCostumers(): Promise<Costumer[]> {
		return this.costumerRepository.getAllCostumers().then((r) => r.data);
	}

	createCostumers(costumer: Costumer) {
		this.costumerRepository.createCostumer(costumer);
	}
	deleteCostumer(id: number) {
		this.costumerRepository.deleteCostumer(id);
	}
	updateCostumer() {}
	getSingleCostumer(id: number): Promise<Costumer> {
		return this.costumerRepository.getSingleCostumer(id);
	}
}
