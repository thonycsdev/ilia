import Link from "next/link";
import React, { ReactNode } from "react";

type NavBarProps = {
	children: ReactNode;
};
function NavBar(props: NavBarProps) {
	const { children } = props;
	return (
		<>
			<div className="w-screen h-24 bg-blue-300 text-white font-bold flex items-center justify-center">
				<div className="pl-5 mr-auto text-5xl">Ilia</div>
				<ul className="flex flex-row w-3/5 justify-center gap-11">
					<Link href={"/"}>
						<li>Home</li>
					</Link>
					<Link href={"/costumer/createCostumer"}>
						<li>Add Customers</li>
					</Link>
					<Link href={"/order/createOrder"}>
						<li>Add Order</li>
					</Link>
					<Link href={"/orders"}>
						<li>Orders</li>
					</Link>
				</ul>
			</div>
			{children}
		</>
	);
}

export default NavBar;
