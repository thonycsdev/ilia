import costumerRepository from "@/repositories/customerRepository";
import { Costumer } from "@/models/costumer";
import { ReactNode, useState, createContext, useEffect } from "react";
import { useQuery } from "react-query";

type CostumerContextProps = {
	costumers: Costumer[];
	getSingleCostumer: (id: number) => Promise<Costumer>;
	updateCostumer: (id: number) => void;
	deleteCostumer: (id: number) => void;
	createCostumer: (costumer: Costumer) => void;
	isLoading: boolean;
};

export const CostumerContext = createContext({} as CostumerContextProps);

type CostumerContextProviderProps = {
	children: ReactNode;
};

export const CostumerContextProvider = (
	props: CostumerContextProviderProps
) => {
	const { createCostumer, deleteCostumer, getAllCostumers, getSingleCostumer } =
		costumerRepository();
	const { data, isSuccess } = useQuery({
		queryFn: getAllCostumers,
		queryKey: ["costumerKey"],
	});
	const { children } = props;
	const [costumers, setCostumers] = useState<Costumer[]>([]);
	useEffect(() => {
		if (data) {
			setCostumers(data);
		}
	}, [data]);
	function updateCostumer() {}
	return (
		<CostumerContext.Provider
			value={{
				costumers,
				getSingleCostumer,
				createCostumer,
				deleteCostumer,
				updateCostumer,
				isLoading: isSuccess,
			}}
		>
			{children}
		</CostumerContext.Provider>
	);
};
