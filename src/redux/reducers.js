import * as constans from "./constans";
import createGameBoard from "../utils/create-gameboard";

const initialState = {
	grid: [],
	selected: {
		selectedCell: "",
		isSelected: false,
		flipped: {},
	},
	isSolved: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case constans.CREATE_GAME_BOARD:
			return { ...initialState, grid: createGameBoard(payload) };
		case constans.SELECT_FIRST_TILE:
			return {
				...state,
				selected: {
					...state.selected,
					selectedCell: state.grid[payload.rowIndex][payload.colIndex],
					isSelected: true,
					flipped: {
						...state.selected.flipped,
						[`${payload.rowIndex}${payload.colIndex}`]: state.grid[
							payload.rowIndex
						][payload.colIndex],
					},
				},
			};
		case constans.SELECT_SECOND_TILE:
			return {
				...state,
				selected: {
					...state.selected,
					isSelected: false,
					flipped: {
						...state.selected.flipped,
						[`${payload.rowIndex}${payload.colIndex}`]: state.grid[
							payload.rowIndex
						][payload.colIndex],
					},
					selectedCell: "",
				},
			};
		case constans.SELECT_SECOND_TILE_FAILURE:
			return {
				...state,
				selected: initialState.selected,
			};
		case constans.FINISH_GAME:
			return {
				...state,
				isSolved: true,
			};
		case constans.SEE_RESULT:
			return {
				...state,
				isSolved: false,
			};
		default:
			return state;
	}
};
