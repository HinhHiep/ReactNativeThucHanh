const calcAverageHumanAge = (ages) => {
    const humanAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAge.filter(age => age >= 18);
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    return average;
};

let data1 = [5, 2, 4, 1, 15, 8, 3];
let data2 = [16, 6, 10, 5, 6, 1, 4];

console.log('--- Data Set 1 ---');
console.log(calcAverageHumanAge(data1));
console.log('--- Data Set 2 ---');
console.log(calcAverageHumanAge(data2));