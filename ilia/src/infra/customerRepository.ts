import { constantsApi } from "@/constants/constantsApi";
import axios from "axios";

export default function customerRepository() {
	const response = axios.get(`${constantsApi.ApiKey}/getAllCustomers`);
	return response;
}
