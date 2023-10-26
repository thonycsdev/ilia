import { constantsApi } from "@/constants/constantsApi";
import { Costumer } from "@/models/costumer";
import https from "https";
import axios from "axios";

export default function costumerRepository() {
	const agent = new https.Agent({
		rejectUnauthorized: false, // This allows self-signed certificates
	});
	function getAllCostumers() {
		return axios
			.get(`${constantsApi.ApiKey}/getAllCustomers`, { httpsAgent: agent })
			.then((data) => data.data);
	}

	function getSingleCostumer(id: number) {
		const response = axios.get<Costumer>(constantsApi.ApiKey + "/Customer", {
			params: { id: id },
		});
		return response.then((result) => result.data);
	}

	function createCostumer(costumer: Costumer) {
		return axios.post(constantsApi.ApiKey + "/Customer", costumer);
	}
	function deleteCostumer(id: number) {
		return axios.delete(constantsApi.ApiKey + "/Customer", {
			params: { id: id },
		});
	}
	function updateCostumer(costumer: Costumer) {
		return axios.put(
			constantsApi.ApiKey! + `/Customer/${costumer.id}`,
			costumer
		);
	}

	return {
		getAllCostumers,
		getSingleCostumer,
		createCostumer,
		deleteCostumer,
		updateCostumer,
	};
}
