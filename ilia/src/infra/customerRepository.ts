import { constantsApi } from "@/constants/constantsApi";
import { Costumer } from "@/models/costumer";
import axios from "axios";

export default class CostumerRepository {
	private readonly ApiKey = constantsApi.ApiKey;

	getAllCostumers() {
		const response = axios.get(`${this.ApiKey}/getAllCustomers`);
		return response;
	}

	getSingleCostumer(id: number) {
		const response = axios.get<Costumer>(this.ApiKey + "/Customer", {
			params: { id: id },
		});
		return response.then((result) => result.data);
	}
}
