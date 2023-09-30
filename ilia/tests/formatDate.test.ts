import { formatDateToBrazilFormat } from "@/functions/formatDate";

describe("Format Date Tests", () => {
	it("Should return dd/mm/aaa when passe a default date object", () => {
		const dateFormated = formatDateToBrazilFormat(new Date());
		expect(dateFormated).not.toBeUndefined();
		expect(dateFormated).toBe(
			new Intl.DateTimeFormat("pt-br").format(new Date())
		);
	});
});
