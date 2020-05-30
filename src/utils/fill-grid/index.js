const fillGrid = () => {
	const grid = [];
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const obj = {};
			obj.index = `${i}${j}`;
			grid.push(obj);
		}
	}
	return grid;
};
export default fillGrid;
