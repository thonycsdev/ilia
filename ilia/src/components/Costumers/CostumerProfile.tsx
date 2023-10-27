import { formatDateToBrazilFormat } from "@/functions/formatDate";
import { Costumer } from "@/models/costumer";
import React, { useContext } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { CostumerContext } from "@/contexts/costumerContext";
import Toast from "../Toast/Toast";
import { useDisclosure } from "@chakra-ui/react";
import { CostumerEditModal } from "./CostumerEditModal";

type CostumerProfileProps = {
	costumer: Costumer;
};

function CostumerProfile(props: CostumerProfileProps) {
	const { costumer: data } = props;
	const { successToast } = Toast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { deleteCostumer, isLoading } = useContext(CostumerContext);

	const handleOnClickDelete = () => {
		deleteCostumer(data.id);
		successToast("Costumer Deleted");
	};
	return (
		<>
			<CostumerEditModal isOpen={isOpen} onClose={onClose} costumer={data} />
			<div className="w-screen h-screen flex justify-center items-center pb-20">
				<div className="w-4/6 h-full overflow-auto flex flex-col items-center bg-slate-100 rounded-lg shadow-lg p-4">
					<div className="flex justify-end w-full gap-10">
						<button
							className="w-40 h-10 rounded-lg transform duration-100 bg-gray-200 hover:scale-105 hover:bg-gray-200"
							onClick={onOpen}
						>
							{!isLoading ? <LoadingSpinner /> : "Update"}
						</button>
						<button
							className="w-40 h-10 rounded-lg transform duration-100 bg-gray-200 hover:scale-105 hover:bg-gray-200"
							onClick={handleOnClickDelete}
						>
							{!isLoading ? <LoadingSpinner /> : "Delete"}
						</button>
					</div>
					<div className="flex justify-center items-center">
						<div className="p-8 font-bold text-2xl">Costumer Infos</div>
					</div>
					<div className=" flex gap-7 appearance-none w-2/4 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
						<div className="font-bold">Nome:</div>
						{data.name}
					</div>
					<div className="appearance-none flex w-2/4 gap-7 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
						<div className="font-bold">Email:</div>
						{data.email}
					</div>
					<div className="appearance-none flex w-2/4 gap-7 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
						<div className="font-bold">Created At:</div>
						{formatDateToBrazilFormat(new Date(data.createdAt))}
					</div>
					<div className="p-8 font-bold text-2xl">Orders</div>
					<div className="w-1/2 mx-auto flex justify-center flex-wrap gap-4">
						{data.orders.map((order) => (
							<div
								key={order.id}
								className="appearance-none flex w-auto gap-7 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							>
								<div className="font-bold">Order Id:</div>
								{order.id}
								<div className="font-bold">Product Id:</div>
								{order.productsIds}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default CostumerProfile;
