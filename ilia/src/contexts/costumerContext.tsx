import CostumerRepository from "@/infra/customerRepository";
import { Costumer } from "@/models/costumer";
import { ReactNode, useState, createContext, useEffect } from "react";

type CostumerContextProps = {
	costumers: Costumer[];
	getCostumers: () => void;
	getSingleCostumer: (id: number) => Promise<Costumer>;
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
	const costumerRepository = new CostumerRepository();
	useEffect(() => {
		getCostumers();
	}, []);

	const getCostumers = () => {
		costumerRepository
			.getAllCostumers()
			.then((result) => setCostumers(result.data));
	};
	const createCostumer = () => {};
	const deleteCostumer = () => {};
	const updateCostumer = () => {};
	const getSingleCostumer = (id: number) => {
		const response = costumerRepository.getSingleCostumer(id);
		return response;
	};

	return (
		<CostumerContext.Provider
			value={{
				costumers,
				getSingleCostumer,
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
