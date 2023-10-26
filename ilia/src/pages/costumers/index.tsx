import Costumers from "@/components/Costumers/Costumers";
import SideBar from "@/components/SideBar/SideBar";
import { Costumer } from "@/models/costumer";
import costumerRepository from "@/repositories/customerRepository";
import React from "react";

function CostumersHomePage({ costumers }: { costumers: Costumer[] }) {
	return (
		<>
			<div className="w-screen flex h-screen">
				<div className="flex-0">
					<SideBar />
				</div>
				<div className="flex-1">
					<Costumers costumers={costumers} />
				</div>
			</div>
		</>
	);
}

export default CostumersHomePage;

export async function getServerSideProps() {
	const { getAllCostumers } = costumerRepository();
	const costumers = await getAllCostumers();
	return {
		props: {
			costumers,
		},
	};
}
