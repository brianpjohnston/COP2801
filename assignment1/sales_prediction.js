/*
	 A company has determined that its annual profit is typically 23 percent of total sales. Write a program called sales_prediction.js, that displays the profit based on the project amount of total sales for the year. Use a literal value of $2,500,000 for the projected total sales amount. Display the profit amount formatted to two decimal places. 25 pts
	 
	 inputs:
		total sales
		
	output:
		profits
		
*/

var projectedSales = '2500000';
var profits = projectedSales *.23;
var profits = profits.toFixed(2);

console.log("The Projected profits are $" + profits);
