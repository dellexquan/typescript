export interface Sortable {
    compare(i: number, j: number): boolean
    swap(i: number, j: number): void
    length: number
    sort(): void
}
