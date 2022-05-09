const add = (a: number, b: number): number => {
    return a + b
}

console.log(add(1, 1))

const printStr = (a: string): void => {
    console.log(a)
    // return a
}

printStr('dellex')

function divide(a: number, b: number): number {
    return a / b
}
const multiply = function (a: number, b: number): number {
    return a * b
}

console.log(multiply(3, 4))

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({
    date,
    weather
}: {
    date: Date
    weather: string
}): void => {
    console.log(date)
    console.log(weather)
}

logWeather(todaysWeather)
