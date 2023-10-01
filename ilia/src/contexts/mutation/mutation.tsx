import { MutationFunction, useMutation, useQueryClient } from "react-query";

export function createMutation(func: MutationFunction, queryKey: string) {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: func,
		mutationKey: [`${queryKey}`],
		onSuccess: () => {
			queryClient.invalidateQueries(["costumer"]);
		},
	});
	return mutation;
}
