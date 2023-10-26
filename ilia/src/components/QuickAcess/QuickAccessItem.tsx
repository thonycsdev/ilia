import React from "react";
type QuickAccessItemProps = {
	itemName: string;
	value: number;
};

function QuickAccessItem({ itemName, value }: QuickAccessItemProps) {
	return (
		<div className="shadow-md h-32 w-80 bg-white rounded-md p-3 flex flex-col justify-between">
			<div className="flex justify-between items-center">
				<span className="text-base font-medium">{itemName}</span>
				<span className="bg-cyan-700 rounded text-gray-100 text-xs px-2 py-0.5">
					Today
				</span>
			</div>
			<div>
				<span className="text-2xl font-medium">{value}</span>
			</div>
		</div>
	);
}

export default QuickAccessItem;
