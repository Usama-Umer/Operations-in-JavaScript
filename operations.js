// 1. Arithmetic Operations

// Used for performing basic mathematical operations.
// Operator	Description	Example	Result
// +	Addition	5 + 2	7
// -	Subtraction	5 - 2	3
// *	Multiplication	5 * 2	10
// /	Division	5 / 2	2.5
// %	Modulus (remainder)	5 % 2	1
// **	Exponentiation	5 ** 2	25
// ++	Increment	let a = 5; a++	6 after increment
// --	Decrement	let a = 5; a--	4 after decrement
// 2. Assignment Operations

// Used to assign values to variables.
// Operator	Description	Example	Equivalent To
// =	Assignment	x = 5	
// +=	Add and assign	x += 5	x = x + 5
// -=	Subtract and assign	x -= 5	x = x - 5
// *=	Multiply and assign	x *= 5	x = x * 5
// /=	Divide and assign	x /= 5	x = x / 5
// %=	Modulus and assign	x %= 5	x = x % 5
// **=	Exponentiation and assign	x **= 5	x = x ** 5
// 3. Comparison Operations

// Used to compare two values and return a boolean (true or false).
// Operator	Description	Example	Result
// ==	Equal to	5 == '5'	true
// ===	Strict equal to	5 === '5'	false
// !=	Not equal to	5 != '5'	false
// !==	Strict not equal	5 !== '5'	true
// >	Greater than	5 > 3	true
// <	Less than	5 < 3	false
// >=	Greater than or equal	5 >= 5	true
// <=	Less than or equal	5 <= 5	true
// 4. Logical Operations

// Used to combine or invert boolean values.
// Operator	Description	Example	Result
// &&	Logical AND	true && false	false
// `		`	Logical OR
// !	Logical NOT	!true	false
// 5. Bitwise Operations

// Operate on binary representations of numbers.
// Operator	Description	Example	Binary Result
// &	Bitwise AND	5 & 1	1
// `	`	Bitwise OR	`5
// ^	Bitwise XOR	5 ^ 1	4
// ~	Bitwise NOT	~5	-6
// <<	Left shift	5 << 1	10
// >>	Right shift	5 >> 1	2
// >>>	Zero-fill right shift	5 >>> 1	2
// 6. Ternary Operation

// A compact conditional operator to assign a value based on a condition.

// javascript

// let age = 18;
// let status = (age >= 18) ? "Adult" : "Minor";

// 7. Type Operations

// JavaScript provides operations to check or convert data types.

//     Type Checking: Use typeof to check the data type.

//     javascript

// let value = 42;
// console.log(typeof value); // "number"

// Instance Check: Use instanceof to check if an object is an instance of a particular class.

// javascript

//     let date = new Date();
//     console.log(date instanceof Date); // true

// 8. String Operations

// JavaScript includes several operations for working with strings.

//     Concatenation: + operator or .concat() method.

//     javascript

// let greeting = "Hello, " + "world!";

// Template Literals: Insert expressions within strings.

// javascript

//     let name = "Alice";
//     let message = `Hello, ${name}!`;

// 9. Unary Operations

// Operate on a single operand.
// Operator	Description	Example
// +	Unary plus	+3
// -	Unary negation	-3
// ++	Increment	++x or x++
// --	Decrement	--x or x--
// typeof	Returns the type of the operand	typeof 42