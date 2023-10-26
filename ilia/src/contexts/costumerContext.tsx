import costumerRepository from "@/repositories/customerRepository";
import { Costumer } from "@/models/costumer";
import { ReactNode, createContext } from "react";
import {
	MutationFunction,
	useMutation,
	useQuery,
	useQueryClient,
} from "react-query";
import { checkDate } from "@/functions/checkDate";
import { useRouter } from "next/router";

export type CostumerContextProps = {
	costumers: Costumer[];
	getSingleCostumer: (id: number) => Promise<Costumer>;
	updateCostumer: (costumer: Costumer) => void;
	deleteCostumer: (id: number) => void;
	createCostumer: (costumer: Costumer) => Promise<void>;
	isLoading: boolean;
};

export const CostumerContext = createContext({} as CostumerContextProps);

type CostumerContextProviderProps = {
	children: ReactNode;
};

export const CostumerContextProvider = (
	props: CostumerContextProviderProps
) => {
	const {
		createCostumer,
		deleteCostumer,
		updateCostumer,
		getAllCostumers,
		getSingleCostumer,
	} = costumerRepository();
	const queryClient = useQueryClient();
	const { data, isSuccess } = useQuery({
		queryFn: getAllCostumers,
		queryKey: ["costumer"],
	});
	const { push } = useRouter();

	const deleteMutation = useMutation({
		mutationFn: deleteCostumer as MutationFunction,
		mutationKey: ["costumer"],
		onSuccess: () => {
			queryClient.invalidateQueries(["costumer"]);
		},
	});

	const updateMutation = useMutation({
		mutationFn: updateCostumer as MutationFunction,
		mutationKey: ["singleCostumer"],
		onSuccess: () => {
			queryClient.invalidateQueries(["singleCostumer"]);
			queryClient.invalidateQueries(["costumer"]);
		},
	});

	const handleCreateCustomer = async (costumer: Costumer) => {
		await createCostumer(costumer);
		push("/costumers");
	};

	const handleDeleteCustomer = async (id: number) => {
		try {
			await deleteMutation.mutate(id);
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdateCustomer = async (costumer: Costumer) => {
		try {
			const date = checkDate(costumer);

			await updateMutation.mutate({ ...costumer, createdAt: date });
		} catch (error) {
			console.log(error);
		}
	};

	const { children } = props;
	return (
		<CostumerContext.Provider
			value={{
				costumers: data,
				getSingleCostumer,
				createCostumer: handleCreateCustomer,
				deleteCostumer: handleDeleteCustomer,
				updateCostumer: handleUpdateCustomer,
				isLoading: isSuccess,
			}}
		>
			{children}
		</CostumerContext.Provider>
	);
};
