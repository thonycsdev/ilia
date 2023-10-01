import React from "react";

type ErrolSpanProps = {
	message: string | undefined;
};

function ErrorSpan(props: ErrolSpanProps) {
	const { message } = props;
	return (
		<span className=" text-red-300 text-sm font-bold text-center pb-4">
			{message}
		</span>
	);
}

export default ErrorSpan;
