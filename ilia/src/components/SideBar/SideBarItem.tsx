import Link from "next/link";
import React, { ReactNode } from "react";

type SideBarItemProps = {
	itemTitle: string;
	icon: ReactNode;
	onClick?: () => void;
	route?: string;
};

function SideBarItem({ route, onClick, icon, itemTitle }: SideBarItemProps) {
	return (
		<Link href={route ? route : "/costumers"}>
			<li
				onClick={onClick ? onClick : () => console.log()}
				className="flex justify-between p-5 items-center h-12 hover:shadow-2xl hover:bg-cyan-600 "
			>
				{icon} {itemTitle}
			</li>
		</Link>
	);
}

export default SideBarItem;
