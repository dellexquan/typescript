const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake = [['f150'], ['corolla'], ['camaro']]

const car = carMakers[0]
const myCar = carMakers.pop()

const cars = carMakers.map((car: string): string => {
    return car.toUpperCase()
})

console.log(cars)
