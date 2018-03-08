describe("Class API:", function() {
	describe("#addClass()", function() {
		let $ele = null;
		before(function() {
			let div = document.createElement("div");
			div.id = "J_addClass";
			document.body.appendChild(div);
			$ele = document.querySelector("#J_addClass");
		});
		it(`gtool.addClass($ele,'test') should return true`, function() {
			gtool.addClass($ele, "test");
			assert(gtool.hasClass($ele, "test"));
		});
		after(function() {
			document.body.removeChild($ele);
		});
	});
	describe("#hasClass()", function() {
		let $ele = null;
		before(function() {
			let div = document.createElement("div");
			div.id = "J_hasClass";
			document.body.appendChild(div);
			$ele = document.querySelector("#J_hasClass");
			gtool.addClass($ele, "test");
		});
		it(`gtool.hasClass($ele,'test') should return true`, function() {
			assert(gtool.hasClass($ele, "test"));
		});
		after(function() {
			document.body.removeChild($ele);
		});
	});
	describe("#removeClass", function() {
		let $ele;
		before(function() {
			let div = document.createElement("div");
			div.id = "J_removeClass";
			document.body.appendChild(div);
			$ele = document.querySelector("#J_removeClass");
			gtool.addClass($ele, "test");
		});
		it(`gtool.removeClass($ele,'test') should return false`, function() {
			gtool.removeClass($ele, "test");
			assert.notEqual(gtool.hasClass($ele, "test"));
		});
		after(function() {
			document.body.removeChild($ele);
		});
	});
});
