import React from "react";
import StantardButton from "./StantardButton";
import Swal from "sweetalert2";

type TableItemDeleteButtonProps = {
	onDelete: () => void;
};

function TableItemDeleteButton({ onDelete }: TableItemDeleteButtonProps) {
	const handleUserClickedOnDelete = async () => {
		const { isConfirmed } = await Swal.fire({
			title: "Are you sure ?",
			text: "Do you want to continue?",
			icon: "warning",
			confirmButtonText: "Yes, delete",
			confirmButtonColor: "#164e63",
			iconColor: "#164e63",
			showCancelButton: true,
			cancelButtonText: "Close",
		});

		if (isConfirmed) {
			onDelete();
		}
	};
	return (
		<StantardButton
			onClick={handleUserClickedOnDelete}
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
					d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</StantardButton>
	);
}

export default TableItemDeleteButton;
