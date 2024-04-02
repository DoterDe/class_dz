class Car {
    constructor(manufacturer, model, year, averageSpeed) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.averageSpeed = averageSpeed;
    }

    displayInfo() {
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Average Speed: ${this.averageSpeed} km/h`);
    }

    calculateTime(distance) {
        const hours = distance / this.averageSpeed;
        const restTime = Math.floor(hours / 4); 
        const totalTime = hours + restTime;
        return totalTime;
    }
}

const myCar = new Car("Toyota", "Camry", 2020, 60);
myCar.displayInfo();
console.log(`Time to travel 300 km: ${myCar.calculateTime(300)} h`);


class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    add(otherFraction) {
        const newNumerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
        const newDenominator = this.denominator * otherFraction.denominator;
        return new Fraction(newNumerator, newDenominator);
    }

    subtract(otherFraction) {
        const newNumerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
        const newDenominator = this.denominator * otherFraction.denominator;
        return new Fraction(newNumerator, newDenominator);
    }

    multiply(otherFraction) {
        const newNumerator = this.numerator * otherFraction.numerator;
        const newDenominator = this.denominator * otherFraction.denominator;
        return new Fraction(newNumerator, newDenominator);
    }

    divide(otherFraction) {
        const newNumerator = this.numerator * otherFraction.denominator;
        const newDenominator = this.denominator * otherFraction.numerator;
        return new Fraction(newNumerator, newDenominator);
    }

    reduce() {
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
        const commonDivisor = gcd(this.numerator, this.denominator);
        return new Fraction(this.numerator / commonDivisor, this.denominator / commonDivisor);
    }
}

const fraction1 = new Fraction(3, 4);
const fraction2 = new Fraction(1, 2);
const sum = fraction1.add(fraction2);
const difference = fraction1.subtract(fraction2);
const product = fraction1.multiply(fraction2);
const quotient = fraction1.divide(fraction2);
console.log("Sum:", sum.reduce());
console.log("Difference:", difference.reduce());
console.log("Product:", product.reduce());
console.log("Quotient:", quotient.reduce());


class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    displayTime() {
        console.log(`Time: ${this.hours}:${this.minutes}:${this.seconds}`);
    }

    adjustSeconds(deltaSeconds) {
        this.seconds += deltaSeconds;
        this.normalizeTime();
    }

    adjustMinutes(deltaMinutes) {
        this.minutes += deltaMinutes;
        this.normalizeTime();
    }

    adjustHours(deltaHours) {
        this.hours += deltaHours;
        this.normalizeTime();
    }

    normalizeTime() {
        let carrySeconds = 0;
        let carryMinutes = 0;

        if (this.seconds >= 60) {
            carrySeconds = Math.floor(this.seconds / 60);
            this.seconds %= 60;
        } else if (this.seconds < 0) {
            carrySeconds = Math.ceil(this.seconds / 60);
            this.seconds = 60 + (this.seconds % 60);
        }

        this.minutes += carrySeconds;

        if (this.minutes >= 60) {
            carryMinutes = Math.floor(this.minutes / 60);
            this.minutes %= 60;
        } else if (this.minutes < 0) {
            carryMinutes = Math.ceil(this.minutes / 60);
            this.minutes = 60 + (this.minutes % 60);
        }

        this.hours += carryMinutes;

        if (this.hours >= 24) {
            this.hours %= 24;
        } else if (this.hours < 0) {
            this.hours = 24 + (this.hours % 24);
        }
    }
}

const currentTime = new Time(20, 30, 45);
currentTime.displayTime();
currentTime.adjustSeconds(30);
currentTime.displayTime();
currentTime.adjustMinutes(1);
currentTime.displayTime();
currentTime.adjustHours(1);
currentTime.displayTime();
