import { Order } from "@/models/costumer";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Toast from "../Toast/Toast";
import { CostumerContext } from "@/contexts/costumerContext";
import { OrderContext } from "@/contexts/orderContext";
import { ProductContext } from "@/contexts/productContext";

const initialValue: Order = {
	id: 0,
	createdAt: "",
	customerId: 0,
	productId: 0,
};

function OrdersForm() {
	const { register, handleSubmit } = useForm({ defaultValues: initialValue });
	const { costumers } = useContext(CostumerContext);
	const { products } = useContext(ProductContext);
	const [isLoading, setIsLoading] = useState(false);
	const { successToast } = Toast();
	const { createOrder } = useContext(OrderContext);
	const handleSubmitForm = async (payload: Order) => {
		setIsLoading(true);
		setTimeout(() => {
			createOrder(payload);
			setIsLoading(false);
			successToast("Order created!");
		}, 500);
	};
	return (
		<>
			<div className="w-screen h-screen flex justify-center items-center">
				<div className="w-4/6 h-3/4 flex flex-col items-center bg-slate-100 rounded-lg shadow-lg">
					<form
						className="flex justify-center flex-col items-center pt-10 w-4/6 flex-wrap"
						onSubmit={handleSubmit(handleSubmitForm)}
					>
						<div className="w-full md:w-1/2 px-3">
							<label className="block tracking-wide text-gray-700 font-bold mb-2">
								Costumer Name
							</label>
							<select
								className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="grid-first-name"
								{...register("customerId", { required: "This is required" })}
							>
								{costumers.map((customer) => (
									<option key={customer.id} value={customer.id}>
										{customer.name}
									</option>
								))}
							</select>
							<label className="block tracking-wide text-gray-700 font-bold mb-2">
								Product
							</label>
							<select
								className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="grid-first-name"
								{...register("productId", { required: "This is required" })}
							>
								{products.map((p) => (
									<option key={p.id} value={p.id}>
										{p.title}
									</option>
								))}
							</select>
						</div>

						<button
							type="submit"
							className="w-40 h-10 rounded-lg mt-8 mx-auto bg-gray-200"
						>
							{isLoading ? <LoadingSpinner /> : "Create Order"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default OrdersForm;
