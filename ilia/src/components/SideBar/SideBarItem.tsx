import React, { ReactNode } from "react";

type SideBarItemProps = {
	itemTitle: string;
	icon: ReactNode;
};

function SideBarItem({ icon, itemTitle }: SideBarItemProps) {
	return (
		<li className="flex justify-between p-5 items-center h-12 hover:shadow-2xl hover:bg-cyan-600 ">
			{icon} {itemTitle}
		</li>
	);
}

export default SideBarItem;
