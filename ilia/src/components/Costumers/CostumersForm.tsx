import { CostumerContext } from "@/contexts/costumerContext";
import { Costumer } from "@/models/costumer";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Toast from "../Toast/Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCostumerSchema } from "@/schemas/costumerSchema";
import ErrorSpan from "../ErrosSpan/ErrorSpan";
const initialValue: Costumer = {
	id: 0,
	createdAt: "",
	name: "",
	email: "",
	orders: [],
};

function CostumersForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: initialValue,
		resolver: zodResolver(createCostumerSchema),
	});
	const [isLoading, setIsLoading] = useState(false);
	const { successToast } = Toast();
	const { createCostumer } = useContext(CostumerContext);
	const handleSubmitForm = async (payload: Costumer) => {
		setIsLoading(true);
		setTimeout(() => {
			createCostumer(payload);
			setIsLoading(false);
			successToast("Costumer Created");
		}, 500);
	};

	return (
		<>
			<div className="w-screen h-screen flex justify-center items-center">
				<div className="w-4/6 h-3/4 flex flex-col items-center bg-slate-100 rounded-lg shadow-lg">
					<form
						className="flex justify-center pt-10 flex-wrap"
						onSubmit={handleSubmit(handleSubmitForm)}
					>
						<div className="w-full md:w-1/2 px-3">
							<label className="block tracking-wide text-gray-700 font-bold mb-2">
								Costumer Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="grid-first-name"
								type="text"
								{...register("name")}
								defaultValue={initialValue.name}
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
								defaultValue={initialValue.email}
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
							type="submit"
							className="w-40 h-10 rounded-lg mt-8 mx-auto bg-gray-200"
						>
							{isLoading ? <LoadingSpinner /> : "Create Customer"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default CostumersForm;
