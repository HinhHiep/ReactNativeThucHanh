//1. Use a constructor function to implement an 'ElectricCar' (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
//2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
//3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going
// at 140 km/h, with a charge of 22%'
//4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'!
// Test data:
// Data Set 1: 'Tesla' going at 120 km/h, with a charge of 23%
// Hints:
// - Use the 'this' keyword
// - Don't forget to call the parent constructor
// - Check the current speed and charge in the accelerate method
// - Increase the speed by 20 and decrease the charge by 1%
// - Then log the message
// - Experiment with different values and methods
// - Good Luck 😀

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
const ElectricCar = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}
ElectricCar.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} is now going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}
const tesla = new ElectricCar('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);

console.log(tesla);
console.log(tesla.speed);
console.log(tesla.charge);
console.log(tesla.make);
