export function formatCurrency(moneyAmount: number) {
	const convertedMoneyAmount = moneyAmount.toLocaleString("pt-br", {
		style: "currency",
		currency: "BRL",
	});
	return convertedMoneyAmount;
}
