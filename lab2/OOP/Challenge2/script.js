//1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
//2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
//3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
//4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter
// Test data:
// Data Set 1: 'Ford' going at 120 km/h
// Hints:
// - Use the 'this' keyword
// - Write the constructor and the methods
// - Don't forget to set the 'speed' property back to 0 in the constructor
// - Use a setter and a getter in the class
// - Experiment with different values and methods
// - Good Luck 😀

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is now going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is now going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();
ford.speedUS = 50;
console.log(ford);
console.log(ford.speedUS);
console.log(ford.speed);
console.log(ford.speedUS);

