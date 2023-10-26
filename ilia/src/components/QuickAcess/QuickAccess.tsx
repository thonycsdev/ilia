import React from "react";
import QuickAccessItem from "./QuickAccessItem";

type QuickAccessProps = {
	costumersLenght: number;
	ordersLenght: number;
};

function QuickAccess({ costumersLenght, ordersLenght }: QuickAccessProps) {
	return (
		<div className="flex justify-center w-9/12  m-auto gap-4">
			<QuickAccessItem itemName="Total Costumers" value={costumersLenght} />
			<QuickAccessItem itemName="Total Orders" value={ordersLenght} />
		</div>
	);
}

export default QuickAccess;
