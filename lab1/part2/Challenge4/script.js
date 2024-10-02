//1. Create an array 'bills' containing all 10 test bill values
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//2. Create empty arrays for the tips and the totals ('tips' and 'totals')
let tips = [];
let totals = [];
//3. Use the 'calcTip' function we wrote before to calculate the tip and total values for each bill value in the bills array. Use the following rules:
// - Values less than $50 receive a 20% tip
// - Values between $50 and $300 receive a 15% tip
// - Values higher than $300 receive a 10% tip
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);
//4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array.
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));

