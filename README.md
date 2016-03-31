Universal converter.

##### Methods
<a href="#number">Number conversions (binary, octal, decimal, hex)</a>
<br>
<a href="#date">Date and time</a>
<br>
<a href="#types">Types (integer and float)</a>
<br>
<a href="#bit">Bit operations</a>
<br>
<a href="#json">JSON and array conversions</a>
<br>
<a href="#checks">Checks</a>

## Usage

#####From src

Include to html header
    
```javascript
<script type="text/javascript" src="~path/converter.js"></script>
```
    
or the minified version
    
```javascript
<script type="text/javascript" src="~path/converter.min.js"></script>
```

and then use class instance
    
```javascript
var converterObj = new converter();
```
    
#####AMD

```javascript
var converter = require("~path/converter");

var converterObj = new converter();

converterObj.methodName(parameters);
```

## Methods

<a href="#number"></a>
#####Number
___

binary to octal

```javascript
binToOct(input, callback);
```

binary to decimal

```javascript
binToDec(input, callback);
```

binary to hexadecimal

```javascript
binToHex(input, callback);
```

octal to binary

```javascript
octToBin(input, callback);
```

octal to decimal

```javascript
octToDec(input, callback);
```

octal to hexadecimal

```javascript
octToHex(input, callback);
```

decimal to binary

```javascript
decToBin(input, callback);
```

decimal to octal

```javascript
decToOct(input, callback);
```

decimal to hexadecimal

```javascript
decToHex(input, callback);
```

hexadecimal to binary

```javascript
hexToBin(input, callback);
```

hexadecimal to octal

```javascript
hexToOct(input, callback);
```

hexadecimal to decimal

```javascript
hexToDec(input, callback);
```

<a href="#date"></a>
#####Date/time
___

date now

```javascript
getDateNow(callback);
```

date now to seconds

```javascript
datenowToSeconds(callback);
```

date to seconds

```javascript
dateToSeconds(input, callback);
```

seconds to date

```javascript
secondsToDate(input, callback);
```

get timezone

```javascript
getTimezone(callback);
```

time difference

```javascript
timeDifference(from, to, callback);
```

<a href="#types"></a>
#####Types
___

int to float

```javascript
intToFloat(input, digits, callback);
```

float to int

```javascript
floatToInt(input, callback);
```

float rounded

```javascript
floatRounded(input, callback);
```

<a href="#bit"></a>
#####Bit
___

get bit value in position

```javascript
getBit(input, position, callback);
```

shift left

```javascript
shiftLeft(input, bits, callback);
```

shift right

```javascript
shiftRight(input, bits, callback);
```

shift zero-fill right

```javascript
shiftZeroRight(input, bits, callback);
```

bitwise AND

```javascript
bitAnd(input1, input2, callback);
```

bitwise OR

```javascript
bitOr(input1, input2, callback);
```

bitwise XOR

```javascript
bitXor(input1, input2, callback);
```

bitwise NOT

```javascript
bitNot(input, callback);
```

<a href="#json"></a>
#####JSON
___

array to JSON (only values)

```javascript
{ "0" : val1, "1" : val2, ... }

arrayToJson(input, callback);
```
    
array to JSON (keys and values)

```javascript
{ key1 : val1, key2 : val2, ... }

arrayToJsonKeyVal(input, callback);
```

JSON to array (only values)

```javascript
[val1, val2, ... ]

jsonToArray(input, callback);
```
    
JSON to array of arrays

```javascript
[ [ key1, val1 ], [ key2, val2 ], ... ]

jsonToArrayofArrays(input, callback);
```

JSON to string

```javascript
jsonToString(input, callback);
```

string to JSON

```javascript
stringToJson(input, callback);
```

array to string

```javascript
arrayToString(input, callback);
```

string to array

```javascript
stringToArray(input, callback);
```

<a href="#checks"></a>
#####Checks
___

check MAC

```javascript
checkMac(input, callback);
```
    
check IP

```javascript
checkIP(input, callback);
```
    
check type of

```javascript
checkIfNull(input, callback);
    
checkIfUndefined(input, callback);
    
checkIfFunction(input, callback);
    
checkIfObject(input, callback);
  
checkIfArray(input, callback);
 
checkIfString(input, callback);
    
checkIfNumber(input, callback);
    
checkIfBoolean(input, callback);
```
    
get type of

```javascript
check(input, callback);
```
