import { CREATE_GAME_BOARD } from "./constans";
import createGameBoard from "../utils/create-gameboard";

const initialState = {
	grid: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case CREATE_GAME_BOARD:
			return { ...state, grid: createGameBoard(payload) };

		default:
			return state;
	}
};
