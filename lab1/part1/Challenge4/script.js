//1. Calculate the tip, depending on the bill value (if the value is between 50 and 300, the tip will be 15%, otherwise it will be 20%).
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
//2. Print a string to the console containing the bill, the tip, and the total value (bill + tip).
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
let bill2 = 40;
let tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.20;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);
let bill3 = 430;
let tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.20;
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`);