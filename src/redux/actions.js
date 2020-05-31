import { colors } from "../fixtures";
import * as constans from "./constans";

export const createGameBoardAction = (colorTheme = colors) => ({
	type: constans.CREATE_GAME_BOARD,
	payload: colorTheme,
});

export const selectFirstTile = (rowIndex, colIndex) => ({
	type: constans.SELECT_FIRST_TILE,
	payload: { rowIndex, colIndex },
});

export const selectSecondTile = (rowIndex, colIndex) => (
	dispatch,
	getState
) => {
	const board = getState().board;

	dispatch({
		type: constans.SELECT_SECOND_TILE,
		payload: {
			rowIndex,
			colIndex,
		},
	});
	if (board.selected.selectedCell !== board.grid[rowIndex][colIndex]) {
		setTimeout(
			() =>
				dispatch({
					type: constans.SELECT_SECOND_TILE_FAILURE,
				}),
			500
		);
	} else if (Object.values(board.selected.flipped).length === 15) {
		dispatch({
			type: constans.FINISH_GAME,
		});
	}
};

export const seeResult = () => ({
	type: constans.SEE_RESULT,
});
