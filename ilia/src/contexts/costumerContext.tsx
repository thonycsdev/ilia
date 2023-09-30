import customerRepository from "@/infra/customerRepository";
import { Costumer } from "@/models/costumer";
import { ReactNode, useState, createContext, useEffect } from "react";

type CostumerContextProps = {
	costumers: Costumer[];
	getCostumers: () => void;
	updateCostumer: (id: number) => void;
	deleteCostumer: (id: number) => void;
	createCostumer: (costumer: Costumer) => void;
};

export const CostumerContext = createContext({} as CostumerContextProps);

type CostumerContextProviderProps = {
	children: ReactNode;
};

export const CostumerContextProvider = (
	props: CostumerContextProviderProps
) => {
	const { children } = props;
	const [costumers, setCostumers] = useState<Costumer[]>([]);

	const getCostumers = () => {
		customerRepository().then((result) => setCostumers(result.data));
	};

	useEffect(() => {
		getCostumers();
	}, []);
	const createCostumer = () => {};
	const deleteCostumer = () => {};
	const updateCostumer = () => {};

	return (
		<CostumerContext.Provider
			value={{
				costumers,
				getCostumers,
				createCostumer,
				deleteCostumer,
				updateCostumer,
			}}
		>
			{children}
		</CostumerContext.Provider>
	);
};
