import React, { useState } from "react";
import StandardButton from "./StandardButton";
import { Costumer } from "@/models/costumer";
import { CostumerEditModal } from "../Costumers/CostumerEditModal";

type TableItemUpdateButtonProps = {
	costumer: Costumer;
};

function TableItemUpdateButton({ costumer }: TableItemUpdateButtonProps) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<CostumerEditModal
				costumer={costumer}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
			<StandardButton
				onClick={() => setIsOpen(true)}
				className="hover:text-cyan-600 hover:scale-125 transition-all duration-150"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
					/>
				</svg>
			</StandardButton>
		</>
	);
}

export default TableItemUpdateButton;
