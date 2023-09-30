import CostumersForm from "@/components/Costumers/CostumersForm";
import { CostumerContext } from "@/contexts/costumerContext";
import { Costumer } from "@/models/costumer";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

function SingleCostumer() {
	const router = useRouter();
	const [costumer, setCostumer] = useState<Costumer | undefined>(undefined);
	const { getSingleCostumer } = useContext(CostumerContext);

	const handleFetchCostumer = () => {
		if (!router.query.id) return;
		getSingleCostumer(+router.query.id!).then((result) => setCostumer(result));
	};

	useEffect(() => {
		handleFetchCostumer();
	}, [router]);
	if (!costumer) return <h1>Loading...</h1>;
	return <CostumersForm />;
}

export default SingleCostumer;
