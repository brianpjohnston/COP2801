/*
	One acre of land is equivalent to 43,560 square feet. Write a program called land_calculation.js that calculates the number of acres in the a tract of land based on the total square feet in a tract of land. Use a literal value of 348,480 for the total square feet. 25 pts
	
	inputs:
		acre value
		space of land
		
	Output:
		Number of Acres

*/

var acre = 43560;
var land = 348480;
var numOfAcres = land / acre;

console.log("The number of acres in " + land + " square feet is " + numOfAcres + " acres.");
