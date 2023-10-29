import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
} from "@chakra-ui/react";
import React from "react";
import StandardButton from "../Buttons/StandardButton";
import { Order } from "@/models/costumer";
import { formatDateToBrazilFormat } from "@/functions/formatDate";
import sumTotalCartPrice from "@/functions/sumTotalCartPrice";
import { formatCurrency } from "@/functions/formatCurrency";
import OrderItemsTable from "../Table/OrderItemsTable";
type OrderDetailsModalProps = {
	isOpen: boolean;
	onClose: () => void;
	order: Order;
};

function OrderDetailsModal({ isOpen, onClose, order }: OrderDetailsModalProps) {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent maxW={1200}>
					<ModalHeader className="bg-cyan-600 text-white rounded-b-lg font-bold">
						Order Details
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody w={1200} className="flex flex-col items-center ">
						<div className=" w-full flex justify-between px-20 py-10 text-lg font-bold">
							<div className="flex flex-col">
								<label className="flex gap-5">
									Order Number:
									<div>{order.id}</div>
								</label>
								<label className="flex gap-5">
									Order Date:
									<div>
										{formatDateToBrazilFormat(new Date(order.createdAt))}
									</div>
								</label>
								<label className="flex gap-5" data-testid="order-sum-price">
									Order Value:
									<div className="text-xl text-cyan-600">
										{formatCurrency(sumTotalCartPrice(order.products))}
									</div>
								</label>
							</div>
							<div className="flex flex-col">
								<label className="flex gap-5">
									Costumer name:
									<div>{order.customer?.name}</div>
								</label>
								<label className="flex gap-5">
									Costumer email:
									<div>{order.customer?.email}</div>
								</label>
							</div>
						</div>
						<div className="flex flex-col h-auto">
							<div className="p-5">
								<label className="text-xl font-bold text-cyan-700">
									Order Items
								</label>
								<OrderItemsTable products={order.products} />
							</div>
						</div>
						<div className="flex justify-center gap-20">
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

export default OrderDetailsModal;
