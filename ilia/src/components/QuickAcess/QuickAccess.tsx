import React, { useContext } from "react";
import QuickAccessItem from "./QuickAccessItem";
import { CostumerContext } from "@/contexts/costumerContext";
import { OrderContext } from "@/contexts/orderContext";

function QuickAccess() {
	const { costumers } = useContext(CostumerContext);
	const { orders } = useContext(OrderContext);
	return (
		<div className="flex justify-center w-9/12  m-auto gap-4">
			<QuickAccessItem itemName="Total Costumers" value={costumers.length} />
			<QuickAccessItem itemName="Total Orders" value={orders.length} />
		</div>
	);
}

export default QuickAccess;
