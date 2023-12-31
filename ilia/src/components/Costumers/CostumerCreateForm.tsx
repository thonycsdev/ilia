import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import StandardButton from "../Buttons/StandardButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { Costumer, CostumerSchema } from "@/models/costumer";
import { CostumerContext } from "@/contexts/costumerContext";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from "../Toast/Toast";
import ErrorSpan from "../ErrosSpan/ErrorSpan";

type CostumerCreateFormProps = {
	isOpen: boolean;
	onClose: () => void;
};

function CostumerCreateForm({ isOpen, onClose }: CostumerCreateFormProps) {
	const { createCostumer } = useContext(CostumerContext);

	const handleSubmitForm: SubmitHandler<Costumer> = async (data) => {
		try {
			await createCostumer({ ...data, createdAt: new Date() });
			const { successToast } = Toast();
			successToast("Costumer was successfully created");
			onClose();
		} catch (error) {
			console.log(error);
			throw new Error();
		}
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Costumer>({
		resolver: zodResolver(CostumerSchema),
	});
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader className="bg-cyan-700 text-white">
						Create Costumer
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
								{errors.name && <ErrorSpan message={errors.name.message} />}
							</div>
							<div className="flex flex-col w-3/4">
								<label className="font-bold text-sm py-3">Email:</label>
								<input
									type="text"
									{...register("email")}
									aria-label="email-input"
									className="rounded-md bg-slate-200 h-8"
								/>
								{errors.email && <ErrorSpan message={errors.email.message} />}
							</div>
						</form>
						<div className="flex justify-center gap-20">
							<StandardButton type="submit" form="form" aria-label="create-btn">
								Create
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
export default CostumerCreateForm;
