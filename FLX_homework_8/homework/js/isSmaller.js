function isBigger(c, d){
if (c > d){
return true;
} else {
return false;
}
}

function isSmaller(c, d){
if (isBigger(c, d) === true){
return false;
} else {
return true;
}
}
isSmaller(20, 50);