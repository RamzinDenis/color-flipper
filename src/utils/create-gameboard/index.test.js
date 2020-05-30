import createGameBoard from "./";

describe("creaeGameBoard", () => {
	const fakeColors = [1, 2, 3, 4, 5, 6, 7, 8];
	let gameBoard;
	beforeEach(() => {
		gameBoard = createGameBoard(fakeColors);
	});
	it("gameboards should not equal to each others", () => {
		const gameBoard2 = createGameBoard(fakeColors);
		expect(gameBoard).not.toEqual(gameBoard2);
	});
	it("should have length of 4 subArray(rows)", () => {
		expect(gameBoard.length).toEqual(4);
	});
	it("subarray should contain one of the passed colors", () => {
		const plainArray = [...fakeColors];
		expect(plainArray).toContain(1);
	});
});
