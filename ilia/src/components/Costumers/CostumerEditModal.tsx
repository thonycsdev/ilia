import { Costumer } from "@/models/costumer";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
} from "@chakra-ui/react";

import { useContext } from "react";
import { CostumerContext } from "@/contexts/costumerContext";
import { FieldValues, useForm } from "react-hook-form";
import Toast from "../Toast/Toast";
import StandardButton from "../Buttons/StandardButton";

type CostumerEditModalProps = {
	isOpen: boolean;
	onClose: () => void;
	costumer: Costumer;
};
export function CostumerEditModal(props: CostumerEditModalProps) {
	const { isOpen, onClose, costumer } = props;
	const { updateCostumer } = useContext(CostumerContext);
	const handleSubmitForm = async (data: FieldValues) => {
		const request = {
			id: costumer.id,
			name: data.name,
			email: data.email,
		} as Costumer;
		try {
			await updateCostumer(request);
			const { successToast } = Toast();
			successToast("Costumer updated successfully");
			onClose();
		} catch (error) {
			console.log(error);
			throw new Error();
		}
	};
	const { register, handleSubmit } = useForm({ values: costumer });
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader className="bg-cyan-700 text-white">
						Update Costumer
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form
							id="form"
							onSubmit={handleSubmit(handleSubmitForm)}
							className="flex flex-col h-64 items-center gap-2"
						>
							<div className="flex flex-col w-3/4">
								<label className="font-bold text-sm py-3">Name:</label>
								<input
									{...register("name")}
									aria-label="name-input"
									type="text"
									className="rounded-md bg-slate-200 h-8"
								/>
							</div>
							<div className="flex flex-col w-3/4">
								<label className="font-bold text-sm py-3">Email:</label>
								<input
									type="text"
									{...register("email")}
									aria-label="email-input"
									className="rounded-md bg-slate-200 h-8"
								/>
							</div>
						</form>
						<div className="flex justify-center gap-20">
							<StandardButton type="submit" form="form" aria-label="create-btn">
								Update
							</StandardButton>
							<StandardButton aria-label="close-btn" onClick={onClose}>
								Close
							</StandardButton>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
