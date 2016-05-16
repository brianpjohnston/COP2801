/*
 Assume that hot dogs come in packages of 10, and hot dog buns come in packages of 8. Write a program called cookout.js, that calculates the number of packages of hot dogs and the number of packages of hot dog buns needed for a cookout, with the minimum amount of leftovers. The program should assume there will be 525 people attending the cookout and each person will eat 3 hot dogs. The program should display the following details.

The minimum number of packages of hot dogs required.

The minimum number of packages of hot dog buns required.

The number of hot dogs that will be left over.

The number of hot dog buns that will be left over.

*/

var numOfPeople =525;
var numOfHDPerPerson =3
var totalHDneeded =0;
var numofHDInPack = 10;
var numOfBunInPack =8;
totalHDneeded = numOfPeople * numOfHDPerPerson;

function totalpacks (a,b){
	var total = Math.ceil(a / b);
	return total;
	
}

function leftOvers(a,b){
	var total = a % b;
	return total;
}

var totalPacksofHD = totalpacks(totalHDneeded, numofHDInPack);
console.log("The minimum number of packages of hot dogs is " + totalPacksofHD );

var totalPacksofBuns = totalpacks(totalHDneeded, numOfBunInPack);
console.log("The minimum number of packages of hot dogs= buns is " + totalPacksofBuns );


var leftoverHD = leftOvers(totalHDneeded,numofHDInPack)
console.log("The number of hot dogs that will be left over is " + leftoverHD )
var leftOverBuns = leftOvers(totalHDneeded,numOfBunInPack)
console.log("The number of hot dog buns that will be left over is " + leftOverBuns )








