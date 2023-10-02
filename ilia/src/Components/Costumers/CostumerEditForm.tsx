import { Costumer } from "@/models/costumer";
import { createCostumerSchema } from "@/schemas/costumerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ErrorSpan from "../ErrosSpan/ErrorSpan";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { CostumerContext } from "@/contexts/costumerContext";
import Toast from "../Toast/Toast";

type CostumerEditFormProps = {
	costumer: Costumer;
	onClose: () => void;
};

export function CostumerEditForm(props: CostumerEditFormProps) {
	const { costumer, onClose } = props;
	const initialValue: Costumer = costumer;
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: initialValue,
		resolver: zodResolver(createCostumerSchema),
	});

	const { updateCostumer } = useContext(CostumerContext);
	const [isLoading, setIsLoading] = useState(false);
	const { successToast } = Toast();
	const handleSubmitForm = async (payload: Costumer) => {
		try {
			setIsLoading(true);
			updateCostumer({ ...payload, id: costumer.id });
			successToast("Customer Updated Successfully");
			setTimeout(() => {
				reset({} as Costumer);
				onClose();
			}, 500);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};
	if (!costumer) return null;
	return (
		<div className="w-full h-96 flex justify-center items-center">
			<div className=" p-2 flex flex-col items-center bg-slate-100 rounded-lg shadow-2xl">
				<form
					className="flex justify-center pt-10 flex-wrap"
					onSubmit={handleSubmit(handleSubmitForm)}
				>
					<div className="w-full">
						<label className="block tracking-wide text-gray-700 font-bold mb-2">
							Costumer Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="text"
							{...register("name")}
							defaultValue={costumer.name}
						/>
						{errors.name && <ErrorSpan message={errors.name.message} />}
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label className="block tracking-wide text-gray-700 font-bold mb-2">
							Costumer Email
						</label>
						<input
							{...register("email")}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="text"
							defaultValue={costumer.email}
						/>
						{errors.email && <ErrorSpan message={errors.email.message} />}
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label className="block tracking-wide text-gray-700 font-bold mb-2">
							Date
						</label>
						<input
							{...register("createdAt")}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="date"
						/>
					</div>
					<button
						className="w-40 h-10 rounded-lg transform duration-100 bg-gray-200 hover:scale-105 hover:bg-gray-200"
						type="submit"
					>
						{isLoading ? <LoadingSpinner /> : "Update"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default CostumerEditForm;
