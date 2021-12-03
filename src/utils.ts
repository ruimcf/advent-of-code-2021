import { readFileSync } from 'fs'

export const readLinesFromInputFile = (inputFileName: string) => {
  const input = readFileSync('./src/inputs/' + inputFileName)
  const lines = input.toString().split('\n')
  return lines
}
