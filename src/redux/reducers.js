import { FILL_GRID } from "./constans";

const initialState = {
	grid: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FILL_GRID:
			return { ...state, ...payload };

		default:
			return state;
	}
};
