import fs from 'fs'
import { DataReader } from './MatchReader'

export class CsvFileReader implements DataReader {
    data: string[][] = []

    read(): void {
        this.data = fs
            .readFileSync('football.csv', { encoding: 'utf-8' })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })
    }

    constructor(public filename: string) {}
}
