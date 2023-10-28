import { constantsApi } from "@/constants/constantsApi";
import { HttpResponse, http } from "msw";
import { createCostumerArray } from "./mockCostumers";
const apiUrl = constantsApi.ApiKey;
export const handlers = [
	http.get(`${apiUrl}/getAllCustomers`, () => {
		const costumers = createCostumerArray(10);
		return HttpResponse.json(costumers);
	}),
];
