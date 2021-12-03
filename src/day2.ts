import { readLinesFromInputFile } from './utils'

type Direction = 'forward' | 'down' | 'up'

interface Command {
  direction: Direction
  distance: number
}

const transformLinesToCommands = (lines: string[]): Command[] =>
  lines.map(str => {
    const [direction, distance] = str.split(' ')
    return { direction, distance: Number(distance) } as Command
  })

const sumDistanceByDirection = (commands: Command[], direction: Direction) =>
  commands.reduce(
    (sum, command) =>
      command.direction === direction ? sum + command.distance : sum,
    0
  )

export const calculateDistance = (inputFile: string) => {
  const lines = readLinesFromInputFile(inputFile)
  const commands = transformLinesToCommands(lines)

  const forwardAmount = sumDistanceByDirection(commands, 'forward')
  const upAmmount = sumDistanceByDirection(commands, 'up')
  const downAmmount = sumDistanceByDirection(commands, 'down')

  const distance = forwardAmount * (downAmmount - upAmmount)
  console.log('Distance', distance)
  return distance
}

export const calculateDistanceWithAim = (inputFile: string) => {
  const lines = readLinesFromInputFile(inputFile)
  const commands = transformLinesToCommands(lines)

  const { forwardDistance, depthDistance } = commands.reduce(
    ({ forwardDistance, depthDistance, aim }, command) => {
      if (command.direction === 'forward') {
        return {
          forwardDistance: forwardDistance + command.distance,
          depthDistance: depthDistance + aim * command.distance,
          aim,
        }
      } else if (command.direction === 'down') {
        return {
          forwardDistance,
          depthDistance,
          aim: aim + command.distance,
        }
      } else {
        return {
          forwardDistance,
          depthDistance,
          aim: aim - command.distance,
        }
      }
    },
    {
      forwardDistance: 0,
      depthDistance: 0,
      aim: 0,
    }
  )
  const distance = forwardDistance * depthDistance
  console.log('Distance', distance)
  return distance
}
