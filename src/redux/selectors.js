import { createSelector } from "reselect";

const getBoard = state => state.board;
const getIndex = (_, props) => ({
	rowIndex: props.rowIndex,
	colIndex: props.colIndex,
});
export const getSelected = createSelector(
	getBoard,
	board => board.selected.isSelected
);

export const getBgColor = createSelector(
	getBoard,
	getIndex,
	(board, { rowIndex, colIndex }) => {
		return board.selected.flipped[`${rowIndex}${colIndex}`] || "";
	}
);
