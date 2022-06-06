import {camelize} from "./StringUtils";

export function csvSplit(row: string, separator: string): string[] {
    const result: string[] = []
    let quoteSeen = false, cell = "";

    for (let i = 0; i < row.length; i++) {
        if (row[i] === "\"") {
            quoteSeen = !quoteSeen
        } else if (!quoteSeen && row[i] === separator) {
            result.push(cell)
            cell = "";
        } else {
            cell += row[i]
        }
    }

    if (cell.length !== 0 ) {
        result.push(cell)
    }

    return result
}

export function csvToObject<T>(csv: string): T[] {

    const separator = ","

    const [headerLine, ...lines] = csv.split('\n');
    const headers = headerLine.split(separator).map((item) => camelize(item));

    return lines
        .map((line, _) =>
            csvSplit(line, separator)
                .reduce(
                    (object, value, index) => ({
                        ...object,
                        [headers[index]]: value,
                    }),
                    {}
                ) as T
        );
}