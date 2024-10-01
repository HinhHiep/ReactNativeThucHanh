//1. write function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(calcTip(100));
//2. Create an array 'bills' containing the test data below
let bills = [125, 555, 44];
//3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
