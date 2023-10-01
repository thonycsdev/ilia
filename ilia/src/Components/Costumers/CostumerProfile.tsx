import { formatDateToBrazilFormat } from "@/functions/formatDate";
import { Costumer } from "@/models/costumer";
import React, { useContext, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { CostumerContext } from "@/contexts/costumerContext";

type CostumerProfileProps = {
	costumer: Costumer;
};

function CostumerProfile(props: CostumerProfileProps) {
	const { costumer } = props;
	const [isLoading, setIsLoading] = useState(false);
	const { deleteCostumer } = useContext(CostumerContext);
	const handleOnClickDelete = () => {
		setIsLoading(true);
		deleteCostumer(costumer.id);
		setIsLoading(false);
	};
	return (
		<div className="w-screen h-screen flex justify-center items-center pb-20">
			<div className="w-4/6 h-3/4 flex flex-col items-center bg-slate-100 rounded-lg shadow-lg p-4">
				<div className="p-8 font-bold text-2xl">Costumer Infos</div>
				<div className=" flex gap-7 appearance-none w-2/4 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
					<div className="font-bold">Nome:</div>
					{costumer.name}
				</div>
				<div className="appearance-none flex w-2/4 gap-7 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
					<div className="font-bold">Email:</div>
					{costumer.email}
				</div>
				<div className="appearance-none flex w-2/4 gap-7 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
					<div className="font-bold">Created At:</div>
					{formatDateToBrazilFormat(new Date(costumer.createdAt))}
				</div>
				<div className="p-8 font-bold text-2xl">Orders</div>
				<div className="w-1/2 mx-auto flex justify-center flex-wrap gap-4">
					{costumer.orders.map((order) => (
						<div
							key={order.id}
							className="appearance-none flex w-2/4 gap-7 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						>
							<div className="font-bold">Order Id:</div>
							{order.id}
						</div>
					))}
				</div>
				<button
					className="ml-auto mt-auto w-40 h-10 rounded-lg mx-auto transform duration-100 bg-gray-200 hover:scale-105 hover:bg-gray-200"
					onClick={handleOnClickDelete}
				>
					{isLoading ? <LoadingSpinner /> : "Delete"}
				</button>
			</div>
		</div>
	);
}

export default CostumerProfile;
