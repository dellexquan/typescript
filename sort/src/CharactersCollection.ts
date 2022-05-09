import { Sorter } from './Sorter'

export class CharactersCollection extends Sorter {
    constructor(public data: string) {
        super()
    }
    compare(i: number, j: number): boolean {
        return this.data[i].toLowerCase() > this.data[j].toLowerCase()
    }
    swap(i: number, j: number): void {
        const arr = this.data.split('')
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        this.data = arr.join('')
    }
    get length(): number {
        return this.data.length
    }
}
