import { Sorter } from './Sorter'

class Node {
    next: Node | null = null

    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    head: Node | null = null
    add(data: number): void {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
            let cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            cur.next = node
        }
    }
    get length(): number {
        if (!this.head) return 0
        let length = 1
        let cur = this.head
        while (cur.next) {
            length++
            cur = cur.next
        }
        return length
    }
    at(index: number): Node {
        if (!this.head) {
            throw new Error('Index out of bounds')
        }
        let counter = 0
        let cur: Node | null = this.head
        while (cur) {
            if (counter === index) return cur
            counter++
            cur = cur.next
        }
        throw new Error('Index out of bounds')
    }
    compare(i: number, j: number): boolean {
        return this.at(i).data > this.at(j).data
    }
    swap(i: number, j: number): void {
        const leftNode = this.at(i)
        const rightNode = this.at(j)
        const temp = leftNode.data
        leftNode.data = rightNode.data
        rightNode.data = temp
    }
    print(): void {
        if (!this.head) {
            return
        }
        let cur: Node | null = this.head
        while (cur) {
            console.log(cur.data)
            cur = cur.next
        }
    }
}
