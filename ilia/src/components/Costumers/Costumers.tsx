import React from "react";
import { Costumer } from "@/models/costumer";
import Table from "../Table/Table";

type CostumersProps = {
	costumers: Costumer[];
};

function Costumers({ costumers }: CostumersProps) {
	if (!costumers) return <h1>Loading</h1>;
	return <Table costumers={costumers} />;
}

export default Costumers;
