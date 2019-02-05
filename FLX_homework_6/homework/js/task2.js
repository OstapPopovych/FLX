function Num(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function calculateDiscount() {
	let InitialPrice = prompt("Please enter amount of money (from 0 to 9999999)", "");
	let Discount = prompt("Please enter discount (from 0 to 99%)", "");
	let PriceDiscount, SaveMoney;

	if(Num(Discount) && Num(InitialPrice)
	&& InitialPrice >= 0 && Discount >= 0 
	&& InitialPrice <= 9999999 && Discount <= 99) {
		SaveMoney = InitialPrice * (Discount / 100);
		PriceDiscount = InitialPrice - SaveMoney;
		return `Price without discount: ${Math.floor(InitialPrice * 100) / 100}
		Discount: ${Math.floor(Discount * 100) / 100}%
		Price with discount: ${Math.floor(PriceDiscount * 100) / 100}
		Saved: ${Math.floor(SaveMoney * 100) / 100}`;
	} else {
		return "Invalid input data";
	}
}
alert(calculateDiscount());