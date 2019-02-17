let data = [
	{
		"_id": "5b5e3168c6bf40f2c1235cd6",
		"index": 0,
		"age": 39,
		"eyeColor": "green",
		"name": "Stein",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e3168e328c0d72e4f27d8",
		"index": 1,
		"age": 38,
		"eyeColor": "blue",
		"name": "Cortez",
		"favoriteFruit": "strawberry"
	},
	{
		"_id": "5b5e3168cc79132b631c666a",
		"index": 2,
		"age": 2,
		"eyeColor": "blue",
		"name": "Suzette",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e31682093adcc6cd0dde5",
		"index": 3,
		"age": 19,
		"eyeColor": "green",
		"name": "George",
		"favoriteFruit": "banana"
	}
];
function findTypes(){
  let arrayTypes = [];
  for(let el = 0; el < arguments.length; el++) {
		arrayTypes[el] = typeof(arguments[el]);
	}
    return arrayTypes;
}
findTypes('number');
findTypes(null, 5, "hello");
function executeforEach(newArray, somefunc){
    for (let i = 0; i < newArray.length; i ++) {
        somefunc(newArray[i]);
    }
}
executeforEach([1,2,3], function(el) { 
	console.log(el) 
});
function mapArray(newArray, somefunc) {
	let newArrayFirst = [];
	executeforEach(newArray, function(elem) {
		newArrayFirst.push(somefunc(elem));
	});
	return newArrayFirst;
}
mapArray([2, 5, 8], function(el) {
	return el + 3
});
function filterArray(newArray, somefunc) {
    let arrayFirst = [];
  
    executeforEach(newArray, element => {
      if (somefunc(element)) {
        arrayFirst.push(element);
      }
    })
  
    return arrayFirst;
}
filterArray([2, 5, 8], function(el) {
	return el > 3
});
function getAmountOfAdultPeople(dataFirst){
    let amount = filterArray(dataFirst, function(element) {
      return element.age > 18;
    });
    return(amount.length);
  }    
  getAmountOfAdultPeople(data);
function getGreenAdultBananaLovers(dataFirst) {
	let filteredAmount = filterArray(dataFirst, function(element) {
		return element.age > 18 && element.eyeColor === "green" && element.favoriteFruit === "banana";
	});
	return mapArray(filteredAmount, function (element) {
		return element.name;
	});
}
getGreenAdultBananaLovers(data);
function keys(object){
    let arrayFirst = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        arrayFirst.push(key);
      }
    }
    return arrayFirst;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});
function values(object){
    let arrayFirst = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        arrayFirst.push(object[key]);
      }
    }
    return arrayFirst;
}
values(({keyOne: 1, keyTwo: 2, keyThree: 3}));
/*-------- 9 --------*/
function showFormattedDate(date){
    const monthNam = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'];
    return `Date: ${date.getDate()} of ${monthNam[date.getMonth()]}, ${date.getFullYear()}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));
/*------- 10 --------*/
function isEvenYear(date) {
	return date.getFullYear() % 2 === 0;
}
isEvenYear(new Date('2019-01-27T01:10:00'));
/*------- 11 --------*/
function isEvenMonth(date) {
	return date.getMonth() % 2 !== 0;
}
