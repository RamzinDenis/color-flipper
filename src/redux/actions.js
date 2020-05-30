import { colors } from "../fixtures";
import * as actionTypes from "./constans";

export const createGameBoardAction = (colorTheme = colors) => ({
	type: actionTypes.CREATE_GAME_BOARD,
	payload: colorTheme,
});
