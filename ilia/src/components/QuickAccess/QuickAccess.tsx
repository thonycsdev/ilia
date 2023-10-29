import React from "react";
import QuickAccessItem from "./QuickAccessItem";
import Link from "next/link";

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
			<Link href={"/costumers"}>
				<QuickAccessItem itemName="Total Costumers" value={costumersLength} />
			</Link>
			<Link href={"/orders"}>
				<QuickAccessItem itemName="Total Orders" value={ordersLength} />
			</Link>
		</div>
	);
}

export default QuickAccess;
