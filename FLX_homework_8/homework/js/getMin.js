function getMin(){
let minValue = arguments[0];
for(let i = 0; i <= arguments.length; i++) {
if(arguments[i] < minValue) {
minValue = arguments[i];
}
}
return minValue;    
}
getMin(3, 20, -500, -1, - 57, 88);