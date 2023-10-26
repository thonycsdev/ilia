import { formatDateToBrazilFormat } from "@/functions/formatDate";
import { Costumer } from "@/models/costumer";
import Link from "next/link";
// import Image from "next/image";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
type CardProps = {
	costumer: Costumer;
};

function Card(props: CardProps) {
	const { costumer } = props;
	const formatedDate = formatDateToBrazilFormat(new Date(costumer.createdAt));
	return (
		<Link href={`/costumer/${costumer.id}`}>
			<div className="flex flex-col justify-center items-center bg-slate-100 w-80 gap-3 h-56 rounded-md transform duration-150 hover:scale-110 hover:cursor-pointer shadow-2xl">
				<div className="scale-150">
					<FaUserAlt />
				</div>
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
