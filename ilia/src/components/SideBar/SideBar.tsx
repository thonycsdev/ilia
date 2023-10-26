import React from "react";
import { HomeIcon, PencilIcon } from "@heroicons/react/24/outline";
import SideBarItem from "./SideBarItem";

type SideBarProps = {
	onCreateCostumerClick?: () => void;
};

function SideBar({ onCreateCostumerClick }: SideBarProps) {
	return (
		<div className="flex min-h-screen">
			<div className="w-64 bg-cyan-900 shrink-0">
				<div className="h-16 flex items-center justify-center shadow-md">
					<span className="text-white text-xl font-medium">Menu</span>
				</div>
				<ul className="flex flex-col text-white space-y-2 text-sm mt-4">
					<SideBarItem
						route={"/costumers"}
						icon={<HomeIcon className="h-5 w-5 text-gray-100" />}
						itemTitle={"Costumers"}
					/>
					<SideBarItem
						icon={<PencilIcon className="h-5 w-5 text-gray-100" />}
						itemTitle={"Create Costumer"}
						onClick={onCreateCostumerClick}
					/>
				</ul>
			</div>
		</div>
	);
}

export default SideBar;
