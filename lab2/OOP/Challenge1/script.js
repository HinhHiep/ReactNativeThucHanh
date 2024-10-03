//1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
//2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
//3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
//4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
// Test data:
// Data Set 1: 'BMW' going at 120 km/h
// Data Set 2: 'Mercedes' going at 95 km/h
// Hints:
// - Use the 'this' keyword
// - Write the constructor function and then add the methods to the prototype
// - Don't forget to set the 'speed' property back to 0 in the constructor function
// Good Luck 😀

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();

console.log(bmw);
console.log(mercedes);

console.log(bmw.speed);
console.log(mercedes.speed);


