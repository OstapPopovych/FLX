function equate() {
	const a = parseFloat(prompt("Please enter value a", ""));
	const b = parseFloat(prompt("Please enter value b", ""));
	const c = parseFloat(prompt("Please enter value c", ""));

	const calculate = (a, b, c )=>{
	let result;
    if (a === 0 || (isNaN(a) || isNaN(b) || isNaN(c))) {
      result = "Invalid input data";
    } 
    else {
      const values = b * b - 4 * a * c;
      
     if (values===0) {
     	result = `x=${-b/(2*a)}`;
     }
     	else if (values>0) {
		const x1 = (-1*b + Math.sqrt(values)) / (2 * a);
		const x2 = (-1*b - Math.sqrt(values)) / (2 * a);
		result = `x1 = ${x1} and x2 = ${x2}`;
	} 
	else  {
		result = "no solution";
	}
}
	return result;
	};
return calculate(a, b, c);
}
alert(equate());