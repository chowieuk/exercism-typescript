const resistorValue = new Map<string, string>([
  ["black","0"],
  ["brown","1"],
  ["red","2"],
  ["orange","3"],
  ["yellow","4"],
  ["green","5"],
  ["blue","6"],
  ["violet","7"],
  ["grey","8"],
  ["white","9"]
])

export function decodedValue(colors: string[]): number {
  let result: string = "";
  if ((resistorValue.get(colors[0]) != undefined) && (resistorValue.get(colors[1]) != undefined)) {
    result  = `${resistorValue.get(colors[0])}${resistorValue.get(colors[1])}`;
  }
  return parseInt(result)
}
