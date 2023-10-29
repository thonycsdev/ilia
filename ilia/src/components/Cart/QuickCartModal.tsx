import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import StandardButton from "../Buttons/StandardButton";
import CartItemLabel from "./CartItemLabel";
import { CartContext } from "@/contexts/cartContext";

type QuickCartModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

function QuickCartModal({ isOpen, onClose }: QuickCartModalProps) {
	const { cartItems: cartItems, cartCleanUp } = useContext(CartContext);
	const isCartEmpty = cartItems.length <= 0;
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent maxW={1200}>
					<ModalHeader className="bg-cyan-700 text-white">My Cart</ModalHeader>
					<ModalCloseButton />
					<ModalBody w={1200} className="flex flex-col items-center ">
						<div className="flex flex-col max-h-80">
							<label className="font-bold text-sm py-3">Cart Items:</label>
							{isCartEmpty ? (
								<div className="flex justify-center gap-5">
									<span>Cart Empty</span>
								</div>
							) : (
								<div className="p-5 flex flex-col gap-5 overflow-scroll overflow-x-hidden ">
									{cartItems.map((item) => (
										<CartItemLabel product={item} key={item.id} />
									))}
								</div>
							)}
						</div>

						<div className="flex justify-center gap-20 my-10">
							<StandardButton aria-label="close-btn" onClick={onClose}>
								Close
							</StandardButton>
							<StandardButton
								aria-label="close-btn"
								onClick={() => cartCleanUp()}
							>
								Clear Cart
							</StandardButton>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default QuickCartModal;
