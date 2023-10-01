import { Costumer } from "@/models/costumer";
import { createCostumerSchema } from "@/schemas/costumerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import ErrorSpan from "../ErrosSpan/ErrorSpan";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

type CostumerEditFormProps = {
	costumer: Costumer;
};

export function CostumerEditForm(props: CostumerEditFormProps) {
	const { costumer } = props;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {} as Costumer,
		resolver: zodResolver(createCostumerSchema),
	});
	const handleSubmitForm = async (payload: Costumer) => {
		console.log(payload);
	};
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
						{errors.createdAt && (
							<ErrorSpan message={errors.createdAt.message} />
						)}
					</div>
					<button
						className="w-40 h-10 rounded-lg transform duration-100 bg-gray-200 hover:scale-105 hover:bg-gray-200"
						type="submit"
					>
						{costumer ? <LoadingSpinner /> : "Update"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default CostumerEditForm;
