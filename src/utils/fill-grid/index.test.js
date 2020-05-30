import fillGrid from "./";

describe("fillGrid", () => {
	let grid;
	beforeEach(() => {
		grid = fillGrid();
	});
	it("should create 4x4 GRID with objects that have correct index of row and column", () => {
		expect(grid[0].index).toEqual("00");
		expect(grid[4].index).toEqual("10");
	});
	it("should have lenght of 16", () => {
		expect(grid.length).toEqual;
	});
	it("should match the expected mocked grid", () => {
		const mockedgrid = [
			{ index: "00" },
			{ index: "01" },
			{ index: "02" },
			{ index: "03" },
			{ index: "10" },
			{ index: "11" },
			{ index: "12" },
			{ index: "13" },
			{ index: "20" },
			{ index: "21" },
			{ index: "22" },
			{ index: "23" },
			{ index: "30" },
			{ index: "31" },
			{ index: "32" },
			{ index: "33" },
		];
		expect(grid).toEqual(mockedgrid);
	});
});
