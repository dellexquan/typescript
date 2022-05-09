import { MatchData } from './MatchData'
import { dateStringToDate } from './util'
import { MatchResult } from './MatchResult'

export interface DataReader {
    read(): void
    data: string[][]
}

abstract class BaseReader<T> {
    data: T[] = []
    abstract mapRow(row: string[]): T

    load(): void {
        this.reader.read()
        this.data = this.reader.data.map(this.mapRow)
    }
    constructor(public reader: DataReader) {}
}

export class MatchReader extends BaseReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }
}
