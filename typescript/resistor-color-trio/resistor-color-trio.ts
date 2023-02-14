export enum ResistorValues {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9
}


type Color = keyof typeof ResistorValues;

export function decodedResistorValue([first,second,third] : Color[]): string {
  var value = Number(`${ResistorValues[first]}${ResistorValues[second]}`) * 10**ResistorValues[third]
  return value >= 1000 ? `${value/1000} kiloohms` : `${value} ohms`
}