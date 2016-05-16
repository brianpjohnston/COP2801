/*
Write a program called population.js, that predicts the approximate size of a population of organisms. The program should use the following data:

Starting number of organisms: 2

Average daily increase: 30%

Number of days to multiply: 10

The program should display the following table of data:

Day Approiximate     Population
1                                   2

2                                   2.6

3                                   3.38

4                                   4.394

5                                   5.7122

6                                   7.42586

7                                   9.653619

8                                   12.5497

9                                   16.31462

10                                 21.209
*/

var populationNew = 2;
var rate = 1.30
console.log(" Day   Approx Population")


for (i= 1; i <11; i++){
	console.log(i +"      "+populationNew.toFixed(3));
	populationNew *= rate;
	
}

