Universal converter.

## Includes

**Number**

binary to octal

	binToOct(input, callback);

binary to decimal

	binToDec(input, callback);

binary to hexadecimal

	binToHex(input, callback);

octal to binary

	octToBin(input, callback);

octal to decimal

	octToDec(input, callback);

octal to hexadecimal

	octToHex(input, callback);

decimal to binary

	decToBin(input, callback);

decimal to octal

	decToOct(input, callback);

decimal to hexadecimal

	decTohex(input, callback);

hexadecimal to binary

	hexToBin(input, callback);

hexadecimal to octal

	hexToOct(input, callback);

hexadecimal to decimal

	hexToDec(input, callback);

**Date/time**

date now

	getDateNow(callback);

date now to seconds

	datenowToSeconds(callback);

date to seconds

	dateToSeconds(input, callback);

seconds to date

	secondsToDate(input, callback);

get timezone

	getTimezone(callback);

time difference

	timeDifference(from, to, callback);

**Types**

int to float

	intToFloat(input, digits, callback);

float to int

	floatToInt(input, callback);

float rounded

	floatRounded(input, callback);

**Bit**

get bit value in position

	getBit(input, position, callback);

shift left

	shiftLeft(input, bits, callback);

shift right

	shiftRight(input, bits, callback);

shift zero-fill right

	shiftZeroRight(input, bits, callback);

bitwise AND

	bitAnd(input1, input2, callback);

bitwise OR

	bitOr(input1, input2, callback);

bitwise XOR

	bitXor(input1, input2, callback);

bitwise NOT

	bitNot(input, callback);

**JSON**

array to JSON (only values)

	{ "0" : val1, "1" : val2, ... }

	arrayToJson(input, callback);
    
array to JSON (keys and values)

	{ key1 : val1, key2 : val2, ... }

	arrayToJsonKeyVal(input, callback);

JSON to array (only values)

	[val1, val2, ... ]

	jsonToArray(input, callback);
    
JSON to array of arrays

	[ [ key1, val1 ], [ key2, val2 ], ... ]

	jsonToArrayofArrays(input, callback);

JSON to string

	jsonToString(input, callback);

string to JSON

	stringToJson(input, callback);

array to string

	arrayToString(input, callback);

string to array

	stringToArray(input, callback);

