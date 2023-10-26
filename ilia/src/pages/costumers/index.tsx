import CostumerCreateForm from "@/components/Costumers/CostumerCreateForm";
import Costumers from "@/components/Costumers/Costumers";
import SideBar from "@/components/SideBar/SideBar";
import { Costumer } from "@/models/costumer";
import costumerRepository from "@/repositories/customerRepository";
import React, { useState } from "react";

function CostumersHomePage({ costumers }: { costumers: Costumer[] }) {
	const [isModalOpen, setIsOpen] = useState(false);
	return (
		<>
			<CostumerCreateForm
				isOpen={isModalOpen}
				onClose={() => setIsOpen(false)}
			/>
			<div className="w-screen flex h-screen">
				<div className="flex-0">
					<SideBar onCreateCostumerClick={() => setIsOpen(true)} />
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
