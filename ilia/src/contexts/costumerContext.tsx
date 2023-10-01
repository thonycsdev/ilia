import { costumerFactory } from "@/factories/costumerFactory";
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
	const { costumerService } = costumerFactory();
	useEffect(() => {
		getCostumers().then((result) => setCostumers(result));
	}, []);

	const getCostumers = () => {
		return costumerService.getCostumers();
	};
	const createCostumer = (costumer: Costumer) => {
		costumerService.createCostumer(costumer);
		setCostumers((old) => [...old, costumer]);
	};
	const deleteCostumer = (id: number) => {
		costumerService.deleteCostumer(id);
		setCostumers((old) => old.filter((x) => x.id !== id));
	};
	const updateCostumer = () => {};
	const getSingleCostumer = (id: number) => {
		const response = costumerService.getSingleCostumer(id);
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
