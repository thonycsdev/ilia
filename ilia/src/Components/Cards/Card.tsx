import { formatDateToBrazilFormat } from "@/functions/formatDate";
import { Costumer } from "@/models/costumer";
import Link from "next/link";
import React from "react";

type CardProps = {
	costumer: Costumer;
};

function Card(props: CardProps) {
	const { costumer } = props;
	const formatedDate = formatDateToBrazilFormat(new Date(costumer.createdAt));
	return (
		<Link href={`/costumer/${costumer.id}`}>
			<div className="flex flex-col justify-center items-center bg-green-300 w-80 gap-3 h-44 rounded-md transform duration-150 hover:scale-110 hover:cursor-pointer shadow-2xl">
				<div>Costumer name: {costumer.name}</div>
				<div>Costumer email: {costumer.email}</div>
				<div>Created at: {formatedDate}</div>

				<div className="font-bold text-blue-500 hover:text-blue-400">
					See more...
				</div>
			</div>
		</Link>
	);
}

export default Card;
