function isInteger(d) {
if (d % 1 === 0) {
return true;
} else {
return false;
}
}
function formatTime(m) {
if (isInteger(m) && m >= 0) {
	let totalM = m;
	let totaldays = totalM / 1440 ^ 0;
	totalM %= 1440;
	let totalhours = totalM / 60 ^ 0;
	let totalminutes = totalM % 60;
	return (totaldays + ' day(s) ' + totalhours + ' hour(s) ' + totalminutes + ' minute(s)');
	}
return ('Not positive number');
}
formatTime(240);
formatTime(119);
formatTime(3601);