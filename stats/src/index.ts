import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { Summary } from './Summary'

const reader = new MatchReader(new CsvFileReader('football.csv'))
reader.load()
const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())
summary.buildAndPrintReport(reader.data)
