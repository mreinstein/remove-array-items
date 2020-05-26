/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */
export default function removeItems (arr, startIdx, removeCount) {
    const length = arr.length

    if (startIdx >= length || removeCount <= 0 || startIdx < 0)
        return

    removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount)

    const len = length - removeCount

    for (let i = startIdx; i < len; ++i)
        arr[i] = arr[i + removeCount]

    arr.length = len
}
