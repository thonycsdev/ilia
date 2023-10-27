import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import StantardButton from "../Buttons/StantardButton";
import { FieldValues, useForm } from "react-hook-form";
import { CostumerContext } from "@/contexts/costumerContext";

type CreateOrderModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

function CreateOrderModal({ isOpen, onClose }: CreateOrderModalProps) {
	const { costumers } = useContext(CostumerContext);
	const { register, handleSubmit } = useForm();
	const handleSubmitForm = (data: FieldValues) => {
		console.log(data);
	};
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader className="bg-cyan-700 text-white">
						Create Order
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form
							id="form"
							onSubmit={handleSubmit(handleSubmitForm)}
							className="flex flex-col h-64 items-center gap-2"
						>
							<div className="flex flex-col w-3/4">
								<label className="font-bold text-sm py-3">Cart:</label>
								<input
									{...register("name")}
									aria-label="name-input"
									type="text"
									className="rounded-md bg-slate-200 h-8"
								/>
							</div>
							<div className="flex flex-col w-3/4">
								<label className="font-bold text-sm py-3">Costumer:</label>
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
							</div>
						</form>
						<div className="flex justify-center gap-20">
							<StantardButton type="submit" form="form" aria-label="create-btn">
								Create
							</StantardButton>
							<StantardButton aria-label="close-btn" onClick={onClose}>
								Close
							</StantardButton>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default CreateOrderModal;
