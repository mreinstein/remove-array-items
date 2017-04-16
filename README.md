# remove-array-items

remove items from a javascript array with generating garbage.

Despite there being a number of "remove array items" in npm, I couldn't find satisfying all criteria:

* **doesn't generate garbage**
* **performs similar or better to the native `array.splice`**
* es3+ compatible
* has tests

so here we are.

originally inspired by https://gamealchemist.wordpress.com/2013/05/01/lets-get-those-javascript-arrays-to-work-fast/

(which is a gold mine for performant, non-garbage generating array operations by the way.)


## usage

```javascript
const removeItems = require('remove-array-items')

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

removeItems(arr, 3, 4)  //  after execution, arr === [ 1, 2, 3, 8, 9 ]
```
