# remove-array-items

remove items from a javascript array without generating memory garbage.

[![Build Status](https://travis-ci.org/mreinstein/remove-array-items.svg?branch=master)](https://travis-ci.org/mreinstein/remove-array-items)

Despite there being a number of "remove array items" in npm, I couldn't find satisfying all criteria:

* **doesn't generate garbage**
* **performs similar or better to the native `array.splice`**
* has tests
* is a pure es module

so here we are.

originally inspired by https://gamealchemist.wordpress.com/2013/05/01/lets-get-those-javascript-arrays-to-work-fast/

(which is a gold mine for performant, non-garbage generating array operations by the way.)


## usage

```javascript
import removeItems from 'remove-array-items'


const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const startIdx = 3    // integer >= 0
const removeCount = 4 // int >= 0

removeItems(arr, startIdx, removeCount)  // after running, arr === [ 1, 2, 3, 8, 9 ]
```
