import { CostumerContext } from "@/contexts/costumerContext";
import { Costumer } from "@/models/costumer";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Toast from "../Toast/Toast";

const initialValue: Costumer = {
	id: 0,
	createdAt: "",
	name: "",
	email: "",
	orders: [],
};
function CostumersForm() {
	const { register, handleSubmit } = useForm({ defaultValues: initialValue });
	const [isLoading, setIsLoading] = useState(false);
	const { successToast } = Toast();
	const router = useRouter();
	const { createCostumer } = useContext(CostumerContext);
	const handleSubmitForm = async (payload: Costumer) => {
		setIsLoading(true);
		setTimeout(() => {
			createCostumer(payload);
			setIsLoading(false);
			successToast();
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
								{...register("name", { required: "This is required" })}
								defaultValue={initialValue.name}
							/>
						</div>
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block tracking-wide text-gray-700 font-bold mb-2">
								Costumer Email
							</label>
							<input
								{...register("email", { required: "This is required" })}
								className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="grid-first-name"
								type="text"
								defaultValue={initialValue.email}
							/>
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
								defaultValue={initialValue.createdAt}
							/>
						</div>
						<button
							type="submit"
							className="w-40 h-10 rounded-lg mt-8 mx-auto bg-gray-200"
						>
							{isLoading ? <LoadingSpinner /> : "Create Customer"}
						</button>
						<button
							onClick={() => router.push("/orderForm")}
							className="w-40 h-10 rounded-lg mt-8 mx-auto bg-gray-200"
						>
							Create Order
						</button>
					</form>
					<div className="w-1/2 flex flex-col items-center">
						<label className=" text-gray-700 font-bold mb-2">Orders</label>
						{initialValue.orders.map((order) => (
							<div className="bg-gray-200 text-gray-700 border rounded w-1/2 py-3 px-4 mb-3 ">
								{order.id}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default CostumersForm;
