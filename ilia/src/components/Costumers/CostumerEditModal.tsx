import { Costumer } from "@/models/costumer";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
} from "@chakra-ui/react";
import CostumerEditForm from "./CostumerEditForm";

type CostumerEditModalProps = {
	isOpen: boolean;
	onClose: () => void;
	costumer: Costumer;
};
export function CostumerEditModal(props: CostumerEditModalProps) {
	const { isOpen, onClose, costumer } = props;
	return (
		<div className="w-full">
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Costumer Update</ModalHeader>
					<ModalCloseButton />
					<ModalBody width={"full"} height={"full"}>
						<CostumerEditForm costumer={costumer} onClose={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
}
