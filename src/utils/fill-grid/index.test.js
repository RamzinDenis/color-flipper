import fillGrid from "./";

describe("fillGrid", () => {
	let grid;
	const fakeColors = [
		"blue",
		"green",
		"white",
		"dark",
		"chrome",
		"grey",
		"yellow",
		"brown",
	];
	beforeEach(() => {
		grid = fillGrid(fakeColors);
	});
	it("should not work if length of colors array argument not equal to 8", () => {
		expect(fillGrid([1, 2, 3])).toBeFalsy();
	});
	it("should have lenght of 4 and contain 4 subarrays(rows)", () => {
		expect(grid.length).toEqual(4);
		expect(Array.isArray(grid[0])).toBeTruthy();
	});
	it("grid cell should contain correct property", () => {
		expect(grid[0][0]).toEqual("blue");
		expect(grid[3][3]).toEqual("brown");
	});
	it("should contain less than 2 unique color", () => {
		expect(
			grid.flat().filter(item => item === "blue").length
		).toBeLessThanOrEqual(2);
	});
	it("should contain all passed colors", () => {
		for (let i = 0; i < fakeColors.length; i++) {
			expect(grid.flat()).toContain(fakeColors[i]);
		}
	});
});
