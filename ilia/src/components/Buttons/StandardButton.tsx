import React, { ReactNode } from "react";

type StandardButtonProps = { children: ReactNode };
type unionProps = StandardButtonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

function StandardButton({ children, ...props }: unionProps) {
	const { className } = props;
	return (
		<button
			className={
				className
					? className
					: "p-2 px-10 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 disabled:bg-gray-500"
			}
			{...props}
		>
			{children}
		</button>
	);
}

export default StandardButton;
