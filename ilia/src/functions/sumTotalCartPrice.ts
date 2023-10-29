import { Product } from "@/models/product";

function sumTotalCartPrice(cartItems: Product[]) {
	const totalCartCost = cartItems.reduce((accumulator, product) => {
		return accumulator + product.price;
	}, 0);

	return totalCartCost;
}

export default sumTotalCartPrice;
