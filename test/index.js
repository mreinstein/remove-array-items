import removeItems from '../src/remove-array-items.js'
import tap         from 'tap'


tap.test('should return if the start index is greater than or equal to the length of the array', function (t) {
  const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  removeItems(arr, arr.length + 1, 5)
  t.equals(arr.length, 10)
  t.end()
})


tap.test('should return if the remove count is 0', function (t) {
  const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  removeItems(arr, 2, 0)
  t.equals(arr.length, 10)
  t.end()
})

tap.test('should remove the number of elements specified from the array, starting from the start index', function (t) {
  const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  removeItems(arr, 3, 4)
  t.deepEquals(arr, [ 1, 2, 3, 8, 9, 10 ])
  t.end()
})

tap.test('should remove other elements if delete count is > than the number of elements after start index', function (t) {
  const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  removeItems(arr, 7, 10)
  t.deepEquals(arr, [ 1, 2, 3, 4, 5, 6, 7 ])
  t.end()
})

tap.test('should remove no element if count <=0', function (t) {
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    removeItems(arr, 7, -2)
    t.deepEquals(arr, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
    t.end()
})

tap.test('should remove no element if start <=0', function (t) {
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    removeItems(arr, -7, 5)
    t.deepEquals(arr, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
    t.end()
})

tap.test("should remove the remaining elements start with 'start' if count > arr.length", function (t) {
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    removeItems(arr, 4, 100)
    t.deepEquals(arr, [ 1, 2, 3, 4])
    t.end()
})
