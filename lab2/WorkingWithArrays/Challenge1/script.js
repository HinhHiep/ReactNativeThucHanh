let JuliaData1 = [3,5,2,12,7];
let KateData1 = [4,1,15,8,3];

let JuliaData2 = [9,16,6,8,3];
let KateData2 = [10,5,6,1,4];

let checkDogs = function(dogsJulia, dogsKate) {
    let dogsJuliaCorrected = dogsJulia.slice(1, -2);
    let dogs = dogsJuliaCorrected.concat(dogsKate);
    dogs.forEach(function(dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }
    });
};

console.log('--- Data Set 1 ---');
checkDogs(JuliaData1, KateData1);
console.log('--- Data Set 2 ---');
checkDogs(JuliaData2, KateData2);
