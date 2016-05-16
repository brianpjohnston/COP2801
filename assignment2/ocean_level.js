/*
Assuming the ocean's level is currently rising at about 1.6 millimeters per year, write a program called ocean_levels.js, that displays the number of millimeters, that the ocean will have risen each year for the next 25 years. 25 pts
*/

var raiseRate = 1.6;
level  =0;

for(i =1; i<26; i++){
	level += raiseRate;
	console.log("In year " + i + " the ocean has risen " + level.toFixed(2) + " millimeters")
}