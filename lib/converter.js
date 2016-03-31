(function(){
    'use strict';

    var check = require("./classes/check");
    var checkObj = new check();
    var json = require("./classes/json");
    var jsonObj = new json();
    var time = require("./classes/time");
    var timeObj = new time();
    var type = require("./classes/type");
    var typeObj = new type();
    var number = require("./classes/number");
    var numberObj = new number();
    var bit = require("./classes/bit");
    var bitObj = new bit();

    var converter = function(){
        
    };

    converter.prototype = {
    	// BIT
    		getBit : function(data, position, callback){
    			bitObj.getBit(data, position, callback);
    		},
            shiftRight : function(data, bits, callback){
                bitObj.shiftRight(data, bits, callback);
            },
            shiftZeroRight : function(data, bits, callback){
                bitObj.shiftZeroRight(data, bits, callback);
            },
            shiftLeft : function(data, bits, callback){
                bitObj.shiftLeft(data, bits, callback);
            },
            bitAnd : function(data, value, callback){
                bitObj.bitAnd(data, value, callback);
            },
            bitOr : function(data, value, callback){
                bitObj.bitOr(data, value, callback);
            },
            bitXor : function(data, value, callback){
                bitObj.bitXor(data, value, callback);
            },
            bitNot : function(data, callback){
                bitObj.bitNot(data, callback);
            },
    	// NUMBER
	    	//BIN
		    	binToOct : function(input, callback){
		    		numberObj.binToOct(input, callback);
		    	},
		    	binToDec : function(input, callback){
		    		numberObj.binToDec(input, callback);
		    	},
		    	binToHex : function(input, callback){
		    		numberObj.binToHex(input, callback);
		    	},
	    	//OCT
		    	octToBin : function(input, callback){
		    		numberObj.octToBin(input, callback);
		    	},
		    	octToDec : function(input, callback){
		    		numberObj.octToDec(input, callback);
		    	},
		    	octToHex : function(input, callback){
		    		numberObj.octToHex(input, callback);
		    	},
	    	//DEC
		    	decToBin : function(input, callback){
		    		numberObj.decToBin(input, callback);
		    	},
		    	decToOct : function(input, callback){
		    		numberObj.decToOct(input, callback);
		    	},
		    	decToHex : function(input, callback){
		    		numberObj.decToHex(input, callback);
		    	},
	    	//HEX
		    	hexToBin : function(input, callback){
		    		numberObj.hexToBin(input, callback);
		    	},
		    	hexToOct : function(input, callback){
		    		numberObj.hexToOct(input, callback);
		    	},
		    	hexToDec : function(input, callback){
		    		numberObj.hexToDec(input, callback);
		    	},
    	// TYPEs
    		intToFloat : function(data, digits, callback){
    			typeObj.intToFloat(data, digits, callback);
    		},
    		floatToInt : function(data, callback){
    			typeObj.floatToInt(data, callback);
    		},
    		floatRounded : function(data, callback){
    			typeObj.floatRounded(data, callback);
    		},
    	// DATA/TIME
    		//get data now
    		getDateNow : function(callback){
    			timeObj.getDateNow(callback);
    		},
    		//get date now to seconds format
    		datenowToSeconds : function(callback){
    			timeObj.datenowToSeconds(callback);
    		},
    		//get seconds from date
    		dateToSeconds : function(data, callback){
    			timeObj.dateToSeconds(data, callback);
    		},
    		//get date from seconds
    		secondsToDate : function(data, callback){
    			timeObj.secondsToDate(data, callback);
    		},
    		//get timezone browser-UTC
    		getTimezone : function(callback){
    			timeObj.getTimezone(callback);
    		},
    		//get time difference between seconds
    		timeDifference : function(from, to, callback){
    			timeObj.timeDifference(from, to, callback);
    		},
    	// JSON
    		jsonToArray : function(data, callback){
                jsonObj.jsonToArray(data, callback);
    		},
    		jsonToArrayofArrays : function(data, callback){
    			jsonObj.jsonToArrayofArrays(data, callback);
    		},
    		arrayToJson : function(data, callback){
    			jsonObj.arrayToJson(data, callback);
    		},
    		arrayToJsonKeyVal : function(data, callback){
    			jsonObj.arrayToJsonKeyVal(data, callback);
    		},
    		jsonToString : function(data, callback){
    			jsonObj.jsonToString(data, callback);
    		},
    		stringToJson : function(data, callback){
    			jsonObj.stringToJson(data, callback);
    		},
    		arrayToString : function(data, separator, callback){
    			jsonObj.arrayToString(data, separator, callback);
    		},
    		stringToArray : function(data, separator, callback){
    			jsonObj.stringToArray(data, separator, callback);
    		},
        // CHECKS
            check : function(data, callback){
                checkObj.check(data, callback);
            },
            //type of
                checkIfArray : function(data, callback){
                    checkObj.checkIfArray(data, callback);
                },
                checkIfNull : function(data, callback){
                    checkObj.checkIfNull(data, callback);
                },
                checkIfUndefined : function(data, callback){
                    checkObj.checkIfUndefined(data, callback);
                },
                checkIfNumber : function(data, callback){
                    checkObj.checkIfNumber(data, callback);
                },
                checkIfBoolean : function(data, callback){
                    checkObj.checkIfBoolean(data, callback);
                },
                checkIfString : function(data, callback){
                    checkObj.checkIfString(data, callback);
                },
                checkIfObject : function(data, callback){
                    checkObj.checkIfObject(data, callback);
                },
                checkIfFunction : function(data, callback){
                    checkObj.checkIfFunction(data, callback);
                },
            //regex
                checkMac : function(data, callback){
                    checkObj.checkMac(data, callback);
                },
                checkIP : function(data, callback){
                    checkObj.checkIP(data, callback);
                },
    };

    module.exports = converter;
})();