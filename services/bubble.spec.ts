import { bubbleSort } from "./bubble"

describe("bubble function", () => {
  test("should return correctly", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  test("should return correctly", () => {
    expect(bubbleSort([5, 2, 9, 1, 7, 2])).toEqual([1, 2, 2, 5, 7, 9])
  })

  test("should return correctly", () => {
    expect(bubbleSort([10, 5, 8, 3, 1, 9, 6, 2, 4, 7])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])
  })

  test("should return empty array", () => {
    expect(bubbleSort([])).toEqual([])
  })
})
