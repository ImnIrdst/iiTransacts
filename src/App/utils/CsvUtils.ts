import {camelize} from "./StringUtils";

export function csvToObject<T>(csv: string): T[] {

  const separator = ","

  const [headerLine, ...lines] = csv.split('\n');
  const headers = headerLine.split(separator).map((item) => camelize(item));

  return lines
    .map((line, _) =>
      line
        .split(separator)
        .reduce(
          (object, value, index) => ({
            ...object,
            [ headers[index] ]: value,
          }),
          {}
        ) as T
    );
}