import React, { useEffect, useState } from "react";
import StandardButton from "../Buttons/StantardButton";

type FilterProps = {
	onUserTyping: (searchTerm: string) => void;
};

function Filter({ onUserTyping }: FilterProps) {
	const [userInput, setUserInput] = useState<string>("");
	const [isDisable, setIsDisable] = useState(true);

	useEffect(() => {
		if (userInput.length > 0) {
			setIsDisable(false);
		} else {
			setIsDisable(true);
			return;
		}
	}, [userInput]);
	onUserTyping(userInput);
	return (
		<div className="w-full flex justify-center pt-20 gap-10">
			<input
				type="text"
				onChange={(e) => setUserInput(e.target.value)}
				placeholder="Search Here"
				value={userInput}
				className="bg-slate-200 w-2/5 h-10 rounded-xl p-3"
			/>
			<StandardButton disabled={isDisable} onClick={() => setUserInput("")}>
				Clear Filter
			</StandardButton>
		</div>
	);
}

export default Filter;
