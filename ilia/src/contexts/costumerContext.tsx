import costumerRepository from "@/repositories/customerRepository";
import { Costumer } from "@/models/costumer";
import { ReactNode, createContext } from "react";
import { useRouter } from "next/router";

export type CostumerContextProps = {
	getSingleCostumer: (id: number) => Promise<Costumer>;
	updateCostumer: (costumer: Costumer) => Promise<void>;
	deleteCostumer: (id: number) => Promise<void>;
	createCostumer: (costumer: Costumer) => Promise<void>;
};

export const CostumerContext = createContext({} as CostumerContextProps);

type CostumerContextProviderProps = {
	children: ReactNode;
};

export const CostumerContextProvider = (
	props: CostumerContextProviderProps
) => {
	const { createCostumer, deleteCostumer, updateCostumer, getSingleCostumer } =
		costumerRepository();

	const { push } = useRouter();

	const handleCreateCustomer = async (costumer: Costumer) => {
		await createCostumer(costumer);
		push("/costumers");
	};

	const handleDeleteCustomer = async (id: number) => {
		try {
			await deleteCostumer(id);
			push("/costumers");
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdateCustomer = async (costumer: Costumer) => {
		try {
			await updateCostumer(costumer);
			push("/costumers");
		} catch (error) {
			console.log(error);
		}
	};

	const { children } = props;
	return (
		<CostumerContext.Provider
			value={{
				getSingleCostumer,
				createCostumer: handleCreateCustomer,
				deleteCostumer: handleDeleteCustomer,
				updateCostumer: handleUpdateCustomer,
			}}
		>
			{children}
		</CostumerContext.Provider>
	);
};
