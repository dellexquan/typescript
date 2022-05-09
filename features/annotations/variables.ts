let apples = 5

apples = 10

console.log(apples)

let speed: string = 'fast'

let nothingMuch: null = null

let nothing: undefined = undefined

let now: Date = new Date()

let names: string[] = ['Marc', 'Fabil', 'Lola']

let point = {
    x: 10,
    y: 20
}

const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

const json = '{"x":10,"y":20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}

let numbers = [-10, -1, 12]
let numbersAboveZero: number[] = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numbersAboveZero.push(numbers[i])
    }
}
console.log(numbersAboveZero)
