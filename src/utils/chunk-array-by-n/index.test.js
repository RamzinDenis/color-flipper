import chunkArrayByN from "./";

describe("chunkArrayByN", () => {
	let arr;
	beforeEach(() => {
		arr = [1, 2, 3, 4, 5, 6];
	});
	it("should have length of subarrays equal to passed N parametr", () => {
		expect(chunkArrayByN(arr, 2).length).toBe(2);
		expect(Array.isArray(chunkArrayByN(arr, 2)[0])).toBeTruthy();
	});
	it("chunked parts should remanin the same", () => {
		expect(chunkArrayByN(arr, 3)[0][0]).toEqual(1);
		expect(chunkArrayByN(arr, 3)[2][1]).toEqual(6);
		expect(chunkArrayByN(arr, 2)).toContainEqual([1, 2, 3]);
	});
});
