import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super()
    }
    compare(i: number, j: number): boolean {
        return this.data[i] > this.data[j]
    }
    swap(i: number, j: number): void {
        const temp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = temp
    }
    get length(): number {
        return this.data.length
    }
}
