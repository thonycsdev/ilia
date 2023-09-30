import { CostumerContext } from "@/contexts/costumerContext";
import React, { useContext } from "react";
import Card from "../Cards/Card";

function Costumers() {
	const { costumers } = useContext(CostumerContext);
	return (
		<div className="w-screen h-screen flex justify-center pt-24 gap-8 flex-wrap">
			{costumers.map((costumer) => (
				<Card costumer={costumer} key={costumer.id} />
			))}
		</div>
	);
}

export default Costumers;
