import shuffleArray from "./";

describe("shuffleArray", () => {
	let array = [1, 2, 3, 4, 5, 6];
	beforeEach(() => {
		shuffleArray(array);
	});
	it("should return array with the same legnth", () => {
		expect(array.length).toBe(6);
	});
	it("should contain the same elements as before shuffle", () => {
		expect(array).toContain(1);
		expect(array).toContain(5);
		expect(array).toContain(3);
	});
});
