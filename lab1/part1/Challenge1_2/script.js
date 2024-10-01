//Challenge 1
//1. Store Mark's and John's mass and height in variables
let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

//2. Calculate both their BMIs
let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / heightJohn ** 2;

//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let markHigherBMI = BMIMark > BMIJohn;

//Challenge 2
//1. Print a nice output to the console, saying who has the higher BMI. The output should be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
}
else {
    console.log("John's BMI is higher than Mark's!");
}
//2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}