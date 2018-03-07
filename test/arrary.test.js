describe("Array API:", function() {
	describe("#arrayEqual()", function() {
		it(`gtool.arrayEqual([0, 2, 3], [1, 2, 3]) should return false)`, function() {
			assert.notEqual(gtool.arrayEqual([0, 2, 3], [1, 2, 3]));
		});
		it(`gtool.arrayEqual([1,2,3],[1,2,3]) should return true)`, function() {
			assert(gtool.arrayEqual([1, 2, 3], [1, 2 ,3]));
		});
		let arr = [9, 2, 3, 4, 5];
		it(`gtool.arrayEqual([${arr},${arr}]) sholud return true`, function() {
			assert(gtool.arrayEqual(arr, arr));
		});
	});
});
