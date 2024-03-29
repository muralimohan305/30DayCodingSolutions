#Day1: Reverse an Array:
There are multiple approaches to reverse an array in JavaScript
Approach 1: Using the reverse() method
Approach 2: Using the spread operator
Approach 3: Using the map() method
Approach 4: Using a for...of loop
Approach 5: Using a while loop
Approach 6: Using the reduce() method
Approach 7: Using a for loop
Approach 8: Using recursion

const originalArray = [1, 2, 3, 4, 5];

1.const reversedArray = originalArray.reverse(); // [5, 4, 3, 2, 1]

2.const reversedArray = [...originalArray].reverse(); 

3.const reversedArray = originalArray.map((_, index, arr) => arr[arr.length - 1 - index]);

4.const reversedArray = [];
for (const item of originalArray) {
  reversedArray.unshift(item);
}

5.let i = originalArray.length - 1;
while (i >= 0) {
  reversedArray.push(originalArray[i]);
  i--;
}

6.const reversedArray = originalArray.reduce((acc, current) => {
  acc.unshift(current);
  return acc;
}, []);

7.const reversedArray = [];
for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}

8.function reverseArray(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    const [first, ...rest] = arr;
    return [...reverseArray(rest), first];
  }
}
const reversedArray = reverseArray(originalArray);
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Day2: Find the maximum number in an array.

There are multiple approaches in JavaScript
Approach 1: Using the Math.max() function and the spread operator
Approach 2: Using the reduce() method
Approach 3: Using the sort() method
Approach 4: Using the Math.max() function with apply()
Approach 5: Using the forEach() method
Approach 6: Using a for loop

const numbers = [12, 34, 56, 78, 90];

1.const maxNumber = Math.max(...numbers);

2.const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);

3.const maxNumber = numbers.slice().sort((a, b) => b - a)[0];

4.const maxNumber = Math.max.apply(null, numbers);

5.let maxNumber = numbers[0];
numbers.forEach((number) => {
  if (number > maxNumber4) {
    maxNumber = number;
  }
});

6.let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}
------------------------------------------------------------------------------------------------------------------------------------------------------
#Day3: 


const numbers = [1, 2, 3, 4, 5];

1.let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

2.const sum = numbers.reduce((acc, current) => acc + current, 0);

3.let sum = 0;
numbers.forEach((number) => {
  sum += number;
});

4.let sum = 0;
for (const number of numbers) {
  sum += number;
}

5.let sum = 0;
for (const index in numbers) {
  sum += numbers[index];
}

6.let sum = 0;
let i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
-----------------------------------------------------------------------------------------------------------------------------------------------------
4. Remove duplicates from an array:
Approach 1: Using sets
Approach 2: Using filter
Approach 3: Using reduce:
Approach 4: Using for-of loop
Approach 5: Using forEach
Approach 6: Using indexof
Approach 7: Using map

const array = [1, 2, 2, 3, 4, 4, 5];

1.const uniqueArray = [...new Set(array)];
2.uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);
3.const uniqueArray = array.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
4.const uniqueArray = [];
for (const item of array) {
  if (!uniqueArray.includes(item)) {
    uniqueArray.push(item);
  }
}
5.const uniqueArray = [];
array.forEach((item) => {
  if (!uniqueArray.includes(item)) {
    uniqueArray.push(item);
  }
});
6.const uniqueArray = [];
for (let i = 0; i < array.length; i++) {
  if (uniqueArray.indexOf(array[i]) === -1) {
    uniqueArray.push(array[i]);
  }
}
7.const map = new Map();
const uniqueArray = [];
for (const item of array) {
  if (!map.has(item)) {
    map.set(item, true);
    uniqueArray.push(item);
  }
}
-----------------------------------------------------------------------------------------------------------------------------------------------------
5. Implement the custom sorting for an array:
function customSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example usage:
const myArray = [5, 2, 9, 3, 6];
const sortedArray = customSort(myArray);
console.log(sortedArray);
----------------------------------------------------------------------------------------------------------------------------------------------------
6. Find the intersection of two arrays.

Approach 1: Using Set, filter and includes (ES6)
Approach 2: Using Set Intersection
Approach 3: Using filter and includes (ES6)
Approach 4: Using filter and a Set (ES6)
Approach 5: Using reduce and a Set (ES6)

1.const findIntersection1 = (arr1, arr2) => [...new Set(arr1.filter(element => arr2.includes(element)))];

2.const findIntersection2 = (arr1, arr2) => [...new Set(arr1.filter(element => new Set(arr2).has(element)))];

3.const findIntersection4 = (arr1, arr2) => arr1.filter(element => arr2.includes(element));

4.const findIntersection5 = (arr1, arr2) => arr1.filter(element => new Set(arr2).has(element));

5.const findIntersection6 = (arr1, arr2) => arr1.reduce((intersection, element) => new Set(arr2).has(element) 
                                            ? [...intersection, element] : intersection, []);

----------------------------------------------------------------------------------------------------------------------------------------------------
7. Rotate an array to the right with xyz 

1.function rotate(array, stepsToShift) {
    for (var i = 0; i < stepsToShift; i++) {
        array.unshift(array.pop());
    }
    return array;
}
console.log(rotate([1,2,5,6,7,8], 3))

2.const rotateArray2 = function(nums, k) {
  // reverse helper function
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  k %= nums.length;
  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));
  return nums;
}
console.log(rotateArray2([1,2,5,6,7,8], 3))
-----------------------------------------------------------------------------------------------------------------------------------------------------
8. Find the largest contiguous subarray sum.
Here's the Kadane's Algorithm: 

function maxSubarraySum(arr) {
  let maxSum = arr[0]; // Initialize maxSum and currentSum with the first element
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Compare the current element with the sum of the current element and the previous subarray sum
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update maxSum if the current subarray sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(array)); // Output: 6 (the subarray [4,-1,2,1] has the largest sum)
------------------------------------------------------------------------------------------------------------------------------------------------------
9. Check if an array is palindrome or not:
// Approach 1: Using a Loop
function isPalindromeLoop(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Approach 2: Using Array Reverse and Comparison
function isPalindromeReverse(arr) {
  const reversedArray = [...arr].reverse();
  return JSON.stringify(arr) === JSON.stringify(reversedArray);
}

// Approach 3: Using the every() method
function isPalindromeEvery(arr) {
  return arr.every((value, index) => value === arr[arr.length - 1 - index]);
}

// Approach 4: Using Recursion
function isPalindromeRecursion(arr) {
  if (arr.length <= 1) {
    return true;
  }
  if (arr[0] !== arr[arr.length - 1]) {
    return false;
  }
  return isPalindromeRecursion(arr.slice(1, -1));
}

const myArray = [1, 2, 3, 2, 1];

console.log("Using Loop:", isPalindromeLoop(myArray)); // true
console.log("Using Reverse:", isPalindromeReverse(myArray)); // true
console.log("Using every():", isPalindromeEvery(myArray)); // true
console.log("Using Recursion:", isPalindromeRecursion(myArray)); // true
-------------------------------------------------------------------------------------------------------------------------------------------------------
Implement a function to shuffle an array.
We have multiple approaches:

1. Fisher-Yates Shuffle Algorithm: This algorithm involves iterating through the array and swapping each element with a randomly chosen element 
that comes after it.

2. Using the `sort` Method with a Custom Comparator: You can use the `sort` method and provide a custom comparator function that generates random 
values for comparison, effectively shuffling the array.

3. Using a While Loop with Random Indices: A while loop can be used to repeatedly swap elements by selecting random indices within the array until 
the entire array is shuffled.

4. Using the `forEach` Method with Modern JavaScript Syntax: The `forEach` method can be employed with modern JavaScript syntax to iterate 
through the array and swap elements with randomly selected indices.

5. Using the `map` Method and `Math.random`: This approach uses the `map` method to create an array of tuples containing random values and 
the original elements, then sorts the tuples based on the random values, effectively shuffling the array.

// Fisher-Yates Shuffle with While Loop
function shuffleArrayWhileLoop(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}

// Fisher-Yates Shuffle with For Loop
function shuffleArrayForLoop(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Using the sort method with a custom comparator
function shuffleArraySort(array) {
  array.sort(() => Math.random() - 0.5);
}

// Using forEach and a modern JavaScript syntax
function shuffleArrayForEach(array) {
  array.forEach((_, i) => {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  });
}

// Using map and Math.random
function shuffleArrayMap(array) {
  array = array.map(a => [Math.random(), a])
               .sort((a, b) => a[0] - b[0])
               .map(a => a[1]);
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];

shuffleArrayWhileLoop(myArray.slice());
console.log("While Loop:", myArray);

shuffleArrayForLoop(myArray.slice());
console.log("For Loop:", myArray);

shuffleArraySort(myArray.slice());
console.log("Sort Method:", myArray);

shuffleArrayForEach(myArray.slice());
console.log("ForEach:", myArray);

shuffleArrayMap(myArray.slice());
console.log("Map Method:", myArray);
---------------------------------------------------------------------------------------------------------------------------------------------------------
