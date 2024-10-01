//1. Calculate the average score for each team
let dolphinsAverage = (96 + 108 + 89) / 3;
let koalasAverage = (88 + 91 + 110) / 3;

//2. Check which team wins in average (highest average score), and print the winner to the console, along with the average score.
if (dolphinsAverage > koalasAverage) {
    console.log(`Dolphins win with an average score of ${dolphinsAverage}`);
}
else if (koalasAverage > dolphinsAverage) {
    console.log(`Koalas win with an average score of ${koalasAverage}`);
}
else {
    console.log('It\'s a draw');
}

//3. Add a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
let dolphinsAverage2 = (97 + 112 + 101) / 3;
let koalasAverage2 = (109 + 95 + 123) / 3;

if (dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAverage2}`);
}
else if (koalasAverage2 > dolphinsAverage2 && koalasAverage2 >= 100) {
    console.log(`Koalas win with an average score of ${koalasAverage2}`);
}
else if (dolphinsAverage2 === koalasAverage2 && dolphinsAverage2 >= 100 && koalasAverage2 >= 100) {
    console.log('It\'s a draw');
}
else {
    console.log('No team wins');
}

//4. Use the test data below to test the game (this data represents the test data for both challenges).
let dolphinsAverage3 = (97 + 112 + 101) / 3;
let koalasAverage3 = (109 + 95 + 106) / 3;

if (dolphinsAverage3 > koalasAverage3 && dolphinsAverage3 >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAverage3}`);
}
else if (koalasAverage3 > dolphinsAverage3 && koalasAverage3 >= 100) {
    console.log(`Koalas win with an average score of ${koalasAverage3}`);
}
else if (dolphinsAverage3 === koalasAverage3 && dolphinsAverage3 >= 100 && koalasAverage3 >= 100) {
    console.log('It\'s a draw');
}
else {
    console.log('No team wins');
}