function addOne(x) {
	return x + 1;
  }
  function pipe() {
	let m = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
	m = arguments[i](m);
	}
	return m;
  }
  pipe(1, addOne);
  pipe(1, addOne, addOne);