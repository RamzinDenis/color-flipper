const chunkArrayByN = (arr, n) => {
	let increment = 0;
	const slisedValue = Math.round(arr.length / n);
	const array = [];
	let value = n;
	while (value) {
		array.push(arr.slice(0 + increment, increment + slisedValue));
		increment += slisedValue;
		value--;
	}
	return array;
};

export default chunkArrayByN;
