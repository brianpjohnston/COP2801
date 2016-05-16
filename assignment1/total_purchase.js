/*
	. A customer in a store is purchasing five items. Write a program called total_purchase.js that creates five items with literal numeric values. The prices of the items should be as follows:

	item 1: $9.99

	item 2: $5.99

	item 3: $.99

	item 4: $59.50

	item 5: $.25

	It then calculates and displays the subtotal of the sale, the amount of sales tax, and the total. Assume the sales tax is 7 percent. Display the answer to two decimal places

	inputs:
	items 1-50
	
	outputs:
	total, total with sales tax


*/


var itemOne = 9.99;
var itemTwo = 5.99;
var itemThree = 0.99;
var itemFour = 59.50;
var itemFive = .25;
var subTotal = itemOne + itemTwo + itemThree + itemFour + itemFive;
var total = subTotal * 1.07;
var total = total.toFixed(2);

console.log("The total for your purchase including tax is $" + total);


