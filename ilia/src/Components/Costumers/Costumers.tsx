import { CostumerContext } from "@/contexts/costumerContext";
import React, { useContext } from "react";

function Costumers() {
	const { costumers } = useContext(CostumerContext);
	return (
		<div>
			{costumers.map((costumer) => (
				<h1>{costumer.name}</h1>
			))}
		</div>
	);
}

export default Costumers;
