import { merge } from "./merge"

describe("merge function", () => {
  test("should return correctly", () => {
    expect(merge([2, 3, 4, 5], [1, 4, 5])).toEqual([1, 2, 3, 4, 4, 5, 5])
  })

  test("should return correctly", () => {
    expect(merge([2, 3], [1, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  test("should return correctly", () => {
    expect(merge([2, 37, 39], [1, 4, 5])).toEqual([1, 2, 4, 5, 37, 39])
  })

  test("should return correctly", () => {
    expect(merge([2, 67, 90], [1, 4, 5, 80])).toEqual([1, 2, 4, 5, 67, 80, 90])
  })

  test("should return correctly", () => {
    expect(merge([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    ])
  })

  test("should return collection1", () => {
    expect(merge([1, 2, 3, 4], [])).toEqual([1, 2, 3, 4])
  })
  test("should return collection2", () => {
    expect(merge([], [1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })

  test("should return empty array", () => {
    expect(merge([], [])).toEqual([])
  })
})
