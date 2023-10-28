import { Product } from "@/models/product";

function sumTotalCartPrice(cartItens: Product[]) {
	const totalCartCost = cartItens.reduce((accumulator, product) => {
		return accumulator + product.price;
	}, 0);

	return totalCartCost;
}

export default sumTotalCartPrice;
