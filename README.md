Universal converter.

<a href="#emphasis">Emphasis</a>

## Usage

**From src**

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
    
**AMD**

```javascript
var converter = require("~path/converter");
var converterObj = new converter();
converterObj.methodName(parameters);
```

<a id="user-content-emphasis" class="anchor" href="#emphasis" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>
## Methods

**Number**

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

**Date/time**

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

**Types**

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

**Bit**

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

**JSON**

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
    
**Checks**

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
