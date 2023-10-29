import React from "react";
import QuickAccessItem from "./QuickAccessItem";

type QuickAccessProps = {
	costumersLength: number;
	ordersLength: number;
};

function QuickAccess({
	costumersLength: costumersLength,
	ordersLength: ordersLength,
}: QuickAccessProps) {
	return (
		<div className="flex justify-center w-9/12  m-auto gap-4">
			<QuickAccessItem itemName="Total Costumers" value={costumersLength} />
			<QuickAccessItem itemName="Total Orders" value={ordersLength} />
		</div>
	);
}

export default QuickAccess;
