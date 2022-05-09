interface CanDrive {
    drive(): void
}

interface CanHonk {
    honk(): void
}

class Vehicle {
    constructor(public color: string) {}

    public drive(): void {
        console.log('drving...')
    }
    public honk(): void {
        console.log('beep')
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, public color: string) {
        super(color)
    }

    public drive(): void {
        console.log('car driving...')
    }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)
vehicle.drive()
vehicle.honk()

const car = new Car(4, 'yellow')
console.log(car.color)
console.log(car.wheels)
car.drive()
car.honk()
