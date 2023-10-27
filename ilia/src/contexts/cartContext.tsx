import { Product } from "@/models/product";
import { ReactNode, createContext, useState } from "react";

type CartContextProps = {
	cartItens: Product[];
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
	const [cartItens, setCartItens] = useState<Product[]>([]);

	const addProductToCart = (product: Product) => {
		setCartItens((old) => [...old, product]);
	};
	const removeProductFromCartByProductId = (productId: number) => {
		setCartItens((old) => old.filter((product) => product.id != productId));
	};
	const cartCleanUp = () => {
		setCartItens([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartItens,
				addProductToCart,
				removeProductFromCartByProductId,
				cartCleanUp,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
