import { readFileSync } from 'fs';

const input = readFileSync("./src/inputs/day1.txt")
const lines = input.toString().split("\n").map(Number)


const tellIncreasedTimes = (array: number[]) => {
    let increasedTimes = 0
    array.forEach((depth, index) => {
        if (index !== 0 && Number(depth) > Number(array[index - 1])) {
            increasedTimes++
        }
    })

    console.log("Increased times: ", increasedTimes)
}

tellIncreasedTimes(lines)

const rollingPeriods: number[] = []
lines.forEach((_, index) => {
    if (index + 2 < lines.length) {
        rollingPeriods.push(lines[index] + lines[index + 1] + lines[index + 2])
    }
})


tellIncreasedTimes(rollingPeriods)