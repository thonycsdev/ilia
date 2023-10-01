import { constantsApi } from "@/constants/constantsApi";
import { Costumer } from "@/models/costumer";
import axios from "axios";

export default function costumerRepository() {
	function getAllCostumers() {
		return axios
			.get(`${constantsApi.ApiKey}/getAllCustomers`)
			.then((data) => data.data);
	}

	function getSingleCostumer(id: number) {
		const response = axios.get<Costumer>(constantsApi.ApiKey + "/Customer", {
			params: { id: id },
		});
		return response.then((result) => result.data);
	}

	function createCostumer(costumer: Costumer) {
		axios.post(constantsApi.ApiKey + "/Customer", costumer);
	}
	function deleteCostumer(id: number) {
		axios.delete(constantsApi.ApiKey + "/Customer", { params: { id: id } });
	}

	return { getAllCostumers, getSingleCostumer, createCostumer, deleteCostumer };
}
