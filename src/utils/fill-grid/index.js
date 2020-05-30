const fillGrid = colors => {
	if (colors.length !== 8) return;

	const grid = [];
	let index = 0;

	for (let i = 0; i < 4; i++) {
		const row = [];
		grid.push(row);
		index++;
		for (let j = 0; j < 4; j++) {
			if (j === 2) index++;
			grid[i][j] = colors[index - 1];
		}
	}
	return grid;
};

export default fillGrid;
