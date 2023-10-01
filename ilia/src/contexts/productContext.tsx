import ProductRepository from "@/repositories/productRepository";
import { Product } from "@/models/product";
import { ReactNode, createContext, useEffect, useState } from "react";

type ProductOrderContextProps = {
	products: Product[];
	getProducts: () => void;
	getSingleProduct: (id: number) => Promise<Product>;
};

export const ProductContext = createContext({} as ProductOrderContextProps);

type OrderContextProviderProps = {
	children: ReactNode;
};

export const ProductContextProvider = (props: OrderContextProviderProps) => {
	const { children } = props;
	const [products, setProducts] = useState<Product[]>([]);
	const productRepository = new ProductRepository();
	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = () => {
		productRepository.getProducts().then((result) => setProducts(result.data));
	};
	const getSingleProduct = (id: number) => {
		const response = productRepository.getSingleProduct(id);
		return response.then((r) => r.data);
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				getProducts,
				getSingleProduct,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
