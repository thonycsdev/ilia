import { CostumerContext } from "@/contexts/costumerContext";
import { Costumer } from "@/models/costumer";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

function SingleCostumer() {
	const router = useRouter();
	const [costumer, setCostumer] = useState<Costumer | undefined>(undefined);
	const { getSingleCostumer } = useContext(CostumerContext);

	const handleFetchCostumer = () => {
		if (!router.query.id) return;
		getSingleCostumer(+router.query.id!).then((result) => setCostumer(result));
	};

	useEffect(() => {
		handleFetchCostumer();
	}, [router]);
	if (!costumer) return <h1>Loading...</h1>;
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="w-4/6 h-3/4 flex flex-col items-center bg-slate-100 rounded-lg shadow-lg">
				<form className="flex justify-center pt-10 flex-wrap">
					<div className="w-full md:w-1/2 px-3">
						<label className="block tracking-wide text-gray-700 font-bold mb-2">
							Costumer Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="text"
							defaultValue={costumer.name}
						/>
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label className="block tracking-wide text-gray-700 font-bold mb-2">
							Costumer Email
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="text"
							defaultValue={costumer.email}
						/>
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label className="block tracking-wide text-gray-700 font-bold mb-2">
							Costumer Email
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="date"
							defaultValue={costumer.createdAt}
						/>
					</div>
					<button
						type="submit"
						className="w-40 h-10 rounded-lg mt-8 mx-auto bg-gray-200"
					>
						Update Costumer
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
					{costumer.orders.map((order) => (
						<div className="bg-gray-200 text-gray-700 border rounded w-1/2 py-3 px-4 mb-3 ">
							{order.id}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SingleCostumer;
