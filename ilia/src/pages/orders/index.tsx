import CreateOrderModal from "@/components/Orders/CreateOrderModal";
import OrderSideBar from "@/components/SideBar/OrderSideBar";
import React, { useState } from "react";

function Orders() {
	const [isModalOpen, setIsOpen] = useState(false);
	return (
		<div>
			<CreateOrderModal isOpen={isModalOpen} onClose={() => setIsOpen(false)} />
			<OrderSideBar onCreateCostumerClick={() => setIsOpen(true)} />
		</div>
	);
}

export default Orders;
