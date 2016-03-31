Universal converter.

## Usage

**From src**

Include to html header
    
    <script type="text/javascript" src="~path/converter.js"></script>
    
or the minified version
    
    <script type="text/javascript" src="~path/converter.min.js"></script>
    
and then use class instance
    
    var converterObj = new converter();
    
**AMD**

	var converter = require("~path/converter");
    var converterObj = new converter();
    converterObj.methodName(parameters);

## Methods

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
    
**Checks**

check MAC

	checkMac(input, callback);
    
check IP

	checkIP(input, callback);
    
check type of

	checkIfNull(input, callback);
    
    checkIfUndefined(input, callback);
    
    checkIfFunction(input, callback);
    
    checkIfObject(input, callback);
    
    checkIfArray(input, callback);
    
    checkIfString(input, callback);
    
    checkIfNumber(input, callback);
    
    checkIfBoolean(input, callback);
    
get type of

	check(input, callback);
