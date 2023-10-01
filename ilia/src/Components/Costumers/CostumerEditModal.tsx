import { Costumer } from "@/models/costumer";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
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
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<CostumerEditForm costumer={costumer} />
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost">Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
