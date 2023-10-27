import ProductCard from "@/components/Cards/ProductCard";
import { CartContext, CartContextProps } from "@/contexts/cartContext";
import { Product } from "@/models/product";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
describe("Product Card ", () => {
	const cartItens: Product[] = [];
	const addProductToCart = jest.fn(() => {
		cartItens.push({} as Product);
	});
	const product: Product = {
		id: 1,
		title: "Cabo de Celular",
		price: 12,
		image: "http://imgpng",
		description: "desc",
		category: "catg",
		rating: {
			rate: 5,
			count: 1,
		},
	};
	const cartCtxProps = {} as CartContextProps;
	beforeEach(() => {
		render(
			<CartContext.Provider
				value={{ ...cartCtxProps, addProductToCart, cartItens: [] }}
			>
				<ProductCard product={product} />
			</CartContext.Provider>
		);
	});
	test("Should render product name in the Card", async () => {
		const nameProduct = screen.getByText("Cabo de Celular");
		expect(nameProduct).toBeInTheDocument();
	});
	test("Should render product price in the Card with the correct format R$", async () => {
		const priceProduct = screen.getByText("R$ 12,00");
		expect(priceProduct).toBeInTheDocument();
	});
	test("Button should call the add product to the cart when clicked", async () => {
		const button = screen.getByRole("button", {
			name: /add to cart/i,
		});
		await userEvent.click(button);
		expect(addProductToCart).toBeCalled();
	});
	test("When a add product is called, the array lenght should be raised by 1", async () => {
		const button = screen.getByRole("button", {
			name: /add to cart/i,
		});
		const oldLenght = cartItens.length;
		await userEvent.click(button);
		expect(cartItens).toHaveLength(oldLenght + 1);
	});
});
