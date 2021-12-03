import { calculateDistance, calculateDistanceWithAim } from '../day2'

test('works with given example for the first part', () => {
  const inputFile = 'day2-example.txt'
  expect(calculateDistance(inputFile)).toBe(150)
})

test('works with my input for the first part', () => {
  const inputFile = 'day2.txt'
  expect(calculateDistance(inputFile)).toBe(2019945)
})

test('works with given example for the second part', () => {
  const inputFile = 'day2-example.txt'
  expect(calculateDistanceWithAim(inputFile)).toBe(900)
})

test('works with my input for the second part', () => {
  const inputFile = 'day2.txt'
  expect(calculateDistanceWithAim(inputFile)).toBe(1599311480)
})
