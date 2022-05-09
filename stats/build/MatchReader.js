"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const util_1 = require("./util");
class BaseReader {
    constructor(reader) {
        this.reader = reader;
        this.data = [];
    }
    load() {
        this.reader.read();
        this.data = this.reader.data.map(this.mapRow);
    }
}
class MatchReader extends BaseReader {
    mapRow(row) {
        return [
            (0, util_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.MatchReader = MatchReader;
