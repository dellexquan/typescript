class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index]
    }
}

class ArrayOfAnyting<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index]
    }
}

const arr = new ArrayOfAnyting(['a', 'b', 'c'])

//Example of generics with functions

function printStrings(arr: string[]): void {
    for (let i = 0; i <= arr.length; i++) console.log(arr[i])
}

function printNumber(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) console.log(arr[i])
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) console.log(arr[i])
}

printAnything(arr.collection)
printAnything([1, 2, 3])

//Generics Constraints
interface Printable {
    print(): void
}

class Car implements Printable {
    print() {
        console.log('I am a car.')
    }
}
class House implements Printable {
    print() {
        console.log('I am a house.')
    }
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print()
    }
}

printHousesOrCars([new House(), new Car()])
