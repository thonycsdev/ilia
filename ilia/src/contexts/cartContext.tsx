import { Product } from "@/models/product";
import { ReactNode, createContext, useState } from "react";

export type CartContextProps = {
	cartItems: Product[];
	addProductToCart: (product: Product) => void;
	removeProductFromCartByProductId: (productId: number) => void;
	cartCleanUp: () => void;
};

export const CartContext = createContext<CartContextProps>(
	{} as CartContextProps
);

type CartContextProviderProps = {
	children: ReactNode;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const [cartItems, setCartItems] = useState<Product[]>([]);

	const addProductToCart = (product: Product) => {
		setCartItems((old) => [...old, product]);
	};
	const removeProductFromCartByProductId = (productId: number) => {
		setCartItems((old) => old.filter((product) => product.id != productId));
	};
	const cartCleanUp = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems: cartItems,
				addProductToCart,
				removeProductFromCartByProductId,
				cartCleanUp,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
