function isPrime(number) {
  if (typeof (number) !== 'number') {
    return 'Error! Need enter number!';
  }
  if (number < 2) {
    return false;
  }

  const square = Math.sqrt(number);
  let i = 2;

  while (i <= square) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }

  return true;
}
isPrime(0);
isPrime(1);
isPrime(17);
isPrime(10000000000000);


function factorial(number) {
  if (typeof (number) !== 'number') {
    return 'Error! Need enter number!';
  }

  let i = 1;
  let result = 1;

  while (i <= number) {
    result = result * i;
    i++;
  }

  return result;
}
factorial(0);
factorial(1);
factorial(6);

//The reverse() method only works with an array. My function does reverse() actions on string, array and numbers.
function reverseString(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result
}

function reverseNumber(num) {
  const numToStr = '' + num;

  return +reverseString(numToStr);
}

function reverseArray(arr) {
  const result = [];

  for (let i = 1; i <= arr.length; i++) {
    result.push(arr[arr.length - i]);
  }

  return result;
}

function reverse(value) {
  if (typeof value === 'string') {
    return reverseString(value)
  } else if (typeof value === 'number') {
    return reverseNumber(value)
  } else if (Array.isArray(value)) {
    return reverseArray(value)
  } else {
    return 'Value only can be string, number or array!';
  }
}
reverse('');
reverse('abcdef');
reverse(125);
reverse([1, 2, 5]);

function fibonachi(num) {
  if (typeof (num) !== 'number') {
    return 'Error! Need enter number!'
  }

  let firstFibNum = 1;
  let secondFibNum = 1;

  if (num === 0) {
    return 0;
  } else if (num < 3) {
    return secondFibNum;
  };

  for (let i = 3; i <= num; i++) {
    let result = firstFibNum + secondFibNum;
    firstFibNum = secondFibNum;
    secondFibNum = result;
  }

  return secondFibNum;
}
fibonachi(0);
fibonachi(1);
fibonachi(10);
fibonachi(20);

function isPalindrome(data) {
  if (typeof (data) !== 'string') {
    return 'Error! Need enter string!'
  }

  let newData = data.split(' ').join('').toLowerCase()

  for (let i = 0; i <= newData.length; i++) {
    if (newData[i] !== newData[newData.length - 1 - i]) {
      return false
    }
  }

  return true
}
isPalindrome('');
isPalindrome('abcdcba');
isPalindrome('abcd');
isPalindrome('A man a plan a canal Panama');

function indexOf(array, searchElement) {
  if (!Array.isArray(array)) {
    return 'Error! Need enter array!'
  }

  for (let i = 0; i <= array.length; i++) {
    if (searchElement === array[i]) {
      return i;
    }
  }

  return -1;
}
indexOf([1, 2, 3], 1);
indexOf([1, 2, 3], 4);

function isSorted(array) {
  if (!Array.isArray(array)) {
    return 'Error! Need enter array!';
  }

  let sortArray = array[0];
  for (let i = 1; i <= array.length; i++) {

    if (sortArray > array[i]) {
      return false;
    }

    sortArray = array[i];
  }

  return true;
}
isSorted([]);
isSorted([-Infinity, -5, 0, 3, 9]);
isSorted([3, 9, -3, 10]);
isSorted(['a', 'b', 'c']);
isSorted(['a', 'c', 'b']);

function missing(arrayToCheck) {
  if (!Array.isArray(arrayToCheck)) {
    return 'Error! Need enter array!';
  }

  if (arrayToCheck.length === 0) {
    return;
  }

  const sortedArray = arrayToCheck.sort((a, b) => a - b);
  const startFrom = 1;
  const result = [];

  if (sortedArray[0] >= startFrom) {
    for (let i = startFrom; i < sortedArray[0]; i++) {
      result.push(i);
    }
  }

  sortedArray.forEach((element, index) => {
    for (let i = element + 1; i < sortedArray[index + 1]; i++) {
      result.push(i);
    }
  });

  if(!result.length) {
    return; 
  };

  return result;
}
missing([]);
missing([1, 2, 3, 4]);
missing([3, 7, 10]);
missing([3, 7]);
missing([15, 10, 9]);

function isBalanced(str) {
  const leftBracer = '{';
  const rightBracer = '}';
  const lastLeftBracer = str.lastIndexOf(leftBracer);
  const firstRightBracer = str.indexOf(rightBracer);
  let leftBracerCounter = 0;
  let rightBracerCounter = 0;

  if (firstRightBracer < lastLeftBracer) return false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === leftBracer) leftBracerCounter++
    if (str[i] === rightBracer) rightBracerCounter++
  }

  return leftBracerCounter === rightBracerCounter;
}
isBalanced('}{}');
isBalanced('{}{}');
isBalanced('{{}');
isBalanced('foo{bar{baz}}');
isBalanced('foo{bar{baz}');
isBalanced('foo{bar}}');
