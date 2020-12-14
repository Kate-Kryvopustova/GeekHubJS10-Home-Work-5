# Home Work 5 - 6

## Task 1
function perform() {
//TODO implement
}
perform(20, function(value) {
console.log(value) // 20
var param = 1;
console.log(param); // 1
return param;
})
.then('a', 'b', function(a, b, param) {
console.log(++param); // 2
return param;
})
.then(function(param) { // param === 2
console.log(++param); // 3
return param;
});

## Task 2
Asynchronous-debounce-search

## Task 3
Tagging:
https://kikill95.github.io/Tagging/ 
##### Vanilla js
## Task 4
### Implement these functions:
1. isPrime - Returns true or false, indicating whether the given number is prime.
isPrime(0)                          // false
isPrime(1)                          // false
isPrime(17)                         // true
isPrime(10000000000000)             // false

2. factorial - Returns a number that is the factorial of the given number.
factorial(0)                        // 1
factorial(1)                        // 1
factorial(6)                        // 720

3. fib - Returns the nth Fibonacci number.
fib(0)                              // 0
fib(1)                              // 1
fib(10)                             // 55
fib(20)                             // 6765

4. isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
isSorted([])                        // true
isSorted([-Infinity, -5, 0, 3, 9])  // true
isSorted([3, 9, -3, 10])            // false

5. reverse - Reverses the given string (yes, using the built in reverse function is cheating).
reverse('')                         // ''
reverse('abcdef')                   // 'fedcba'

6. indexOf - Implement the indexOf function for arrays.
indexOf([1, 2, 3], 1)               // 0
indexOf([1, 2, 3], 4)               // -1

7. isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
isPalindrome('abcd')                            // false
isPalindrome('A man a plan a canal Panama')     // true

8. missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
missing([])                         // undefined
missing([1, 4, 3])                  // 2
missing([2, 3, 4])                  // 1
missing([5, 1, 4, 2])               // 3
missing([1, 2, 3, 4])               // undefined

9. isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
isBalanced('}{')                      // false
isBalanced('{{}')                     // false
isBalanced('{}{}')                    // false
isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }')       // false
isBalanced('foo { bar } }')           // false
