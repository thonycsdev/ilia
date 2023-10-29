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
import { FieldValues, useForm } from "react-hook-form";
import { CartContext } from "@/contexts/cartContext";
import CartItemLabel from "../Cart/CartItemLabel";
import { Costumer } from "@/models/costumer";
import Toast from "../Toast/Toast";
import { OrderContext } from "@/contexts/orderContext";
import Link from "next/link";

type CreateOrderModalProps = {
	isOpen: boolean;
	onClose: () => void;
	costumers: Costumer[];
};

function CreateOrderModal({
	isOpen,
	onClose,
	costumers,
}: CreateOrderModalProps) {
	const { cartItems: cartItems, cartCleanUp } = useContext(CartContext);
	const { addOrder } = useContext(OrderContext);
	const { register, handleSubmit } = useForm();
	const handleSubmitForm = async (data: FieldValues) => {
		try {
			await addOrder({
				customerId: data.customerId,
				createdAt: new Date(),
				products: cartItems,
			});
			cartCleanUp();
			onClose();
			const { successToast } = Toast();
			successToast("Order Received!");
		} catch (error) {
			console.log(error);
		}
	};
	const isCartEmpty = cartItems.length <= 0;
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent maxW={1200}>
					<ModalHeader className="bg-cyan-700 text-white">
						Create Order
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody w={1200} className="flex flex-col items-center ">
						<div className="flex flex-col max-h-80">
							<label className="font-bold text-sm py-3">Cart Items:</label>
							{isCartEmpty ? (
								<div className="flex justify-center gap-5">
									<span>Cart Empty</span>
									<Link href={"/products"}>
										<span className="font-bold hover:cursor-pointer text-blue-700">
											Click here to see products
										</span>
									</Link>
								</div>
							) : (
								<div className="p-5 flex flex-col gap-5 overflow-scroll overflow-x-hidden ">
									{cartItems.map((item) => (
										<CartItemLabel product={item} />
									))}
								</div>
							)}
						</div>
						<form
							id="form"
							onSubmit={handleSubmit(handleSubmitForm)}
							className="flex flex-col items-center w-full h-1/4"
						>
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
							<StandardButton
								disabled={isCartEmpty}
								type="submit"
								form="form"
								aria-label="create-btn"
							>
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

export default CreateOrderModal;
