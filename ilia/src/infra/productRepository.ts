import axios from "axios";

export default class ProductRepository {
	getProducts() {
		return axios.get("https://fakestoreapi.com/products");
	}

	getSingleProduct(id: number) {
		return axios.get("https://fakestoreapi.com/products" + "/" + id);
	}
}
