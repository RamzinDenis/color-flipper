import fillGrid from "../fill-grid";
import shuffleArray from "../shuffle-array";
import chunkArrayByN from "../chunk-array-by-n";

const createGameBoard = colors => {
	const grid = fillGrid(colors).flat();
	shuffleArray(grid);
	return chunkArrayByN(grid, 4);
};

export default createGameBoard;
