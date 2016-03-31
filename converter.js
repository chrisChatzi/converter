(function(){
    'use strict';

    var i = 0;

    var converter = function(){
        
    };

    converter.prototype = {
    	//GENERAL
    		error : function(msg, callback){
    			callback(msg);
    		},
    	// BIT
    		getBit : function(data, position, callback){
    			if(data.length < 1){
    				this.error("Input cannot be empty", callback);
    				return;
    			}
    			if(position <= 0 || position > data.length){
    				this.error("Position is invalid", callback);
    				return;
    			}
    			var converted = data.substring(data.length-position, data.length-position+1);
    			callback(converted);
    		},
            shiftAction : function(type, data, bits, callback){
                var check = this.checkIfBinary(data, callback);
                if(check) return;
                if(bits <= 0){
                    this.error("Bits are invalid", callback);
                    return;
                }
                this.binToDec(data, function (res){
                    var converted = "";
                    if(type == "right") converted = (res >> bits);
                    if(type == "zero") converted = (res >>> bits);
                    if(type == "left") converted = (res << bits);
                    callback(converted);
                });
            },
            shiftRight : function(data, bits, callback){
                this.shiftAction("right", data, bits, callback);
            },
            shiftZeroRight : function(data, bits, callback){
                this.shiftAction("zero", data, bits, callback);
            },
            shiftLeft : function(data, bits, callback){
                this.shiftAction("left", data, bits, callback);
            },
            bitwiseOperations : function(type, val1, val2, callback){
                var check = this.checkIfBinary(val1, callback);
                if(check) return;
                var check2 = this.checkIfBinary(val2, callback);
                if(check2) return;
                var self = this;
                this.binToDec(val1, function (res){
                    self.binToDec(val2, function (res2){
                        var converted = "";
                        if(type == "and") converted = (res & res2);
                        if(type == "or") converted = (res | res2);
                        if(type == "xor") converted = (res ^ res2);
                        callback(converted);
                    });
                });
            },
            bitAnd : function(data, value, callback){
                this.bitwiseOperations("and", data, value, callback);
            },
            bitOr : function(data, value, callback){
                this.bitwiseOperations("and", data, value, callback);
            },
            bitXor : function(data, value, callback){
                this.bitwiseOperations("and", data, value, callback);
            },
            bitNot : function(data, callback){
                var check = this.checkIfBinary(data, callback);
                if(check) return;
                this.binToDec(data, function (res){
                    var converted = (~res);
                    callback(converted);
                });
            },
    	// NUMBER
    		//CHECKS
    			checkIfBinary : function(input, callback){
	    			var error = false;
                    var regex = /^[01]+$/;
                    if(!regex.test(input)){
                        this.error("Binary is invalid", callback);
                        error = true;
                    }
                    return error;
	    		},
	    		checkIfOct : function(input, callback){
	    			var error = false;
	    			var regex = /^[0-7]+$/;
	    			if(!regex.test(input)){
	    				this.error("Oct is invalid", callback);
    					error = true;
	    			}
	    			return error;
	    		},
	    		checkIfDec : function(input, callback){
	    			var error = false;
	    			var regex = /^[0-9]+$/;
	    			if(!regex.test(input)){
	    				this.error("Decimal is invalid", callback);
    					error = true;
	    			}
	    			return error;
	    		},
	    		checkIfHex : function(input, callback){
	    			var error = false;
	    			var regex = /^[0-9a-fA-F]+$/;
	    			if(!regex.test(input)){
	    				this.error("Hexadecimal is invalid", callback);
    					error = true;
	    			}
	    			return error;
	    		},
	    	//BIN
		    	binToOct : function(input, callback){
		    		var check = this.checkIfBinary(input, callback);
		    		if(check) return;
		    		var self = this;
		    		this.binToDec(input, function (res){
		    			self.decToOct(res, function (oct){
		    				callback(oct);
		    			});
		    		});
		    	},
		    	binToDec : function(input, callback){
		    		var check = this.checkIfBinary(input, callback);
		    		if(check) return;
		    		var converted = parseInt(input, 2);
		    		callback(converted);
		    	},
		    	binToHex : function(input, callback){
		    		var check = this.checkIfBinary(input, callback);
		    		if(check) return;
		    		var self = this;
		    		this.binToDec(input, function (res){
		    			self.decToHex(res, function (oct){
		    				callback(oct);
		    			});
		    		});
		    	},
	    	//OCT
		    	octToBin : function(input, callback){
		    		var check = this.checkIfOct(input, callback);
		    		if(check) return;
		    		var self = this;
		    		this.octToDec(input, function (res){
		    			self.decToBin(res, function (oct){
		    				callback(oct);
		    			});
		    		});
		    	},
		    	octToDec : function(input, callback){
		    		var check = this.checkIfOct(input, callback);
		    		if(check) return;
		    		var converted = parseInt(input, 8);
		    		callback(converted);
		    	},
		    	octToHex : function(input, callback){
		    		var check = this.checkIfOct(input, callback);
		    		if(check) return;
		    		var self = this;
		    		this.octToDec(input, function (res){
		    			self.toHex(res, function (oct){
		    				callback(oct);
		    			});
		    		});
		    	},
	    	//DEC
		    	decToBin : function(input, callback){
		    		var check = this.checkIfDec(input, callback);
		    		if(check) return;
		    		var converted = (input >>> 0).toString(2);
		    		callback(converted);
		    	},
		    	decToOct : function(input, callback){
		    		var check = this.checkIfDec(input, callback);
		    		if(check) return;
		    		var converted = (input >>> 0).toString(8);
		    		callback(converted);
		    	},
		    	decToHex : function(input, callback){
		    		var check = this.checkIfDec(input, callback);
		    		if(check) return;
		    		var converted = (input >>> 0).toString(16);
		    		callback(converted);
		    	},
	    	//HEX
		    	hexToBin : function(input, callback){
		    		var check = this.checkIfHex(input, callback);
		    		if(check) return;
		    		var self = this;
		    		this.hexToDec(input, function (res){
		    			self.toBin(res, function (oct){
		    				callback(oct);
		    			});
		    		});
		    	},
		    	hexToOct : function(input, callback){
		    		var check = this.checkIfHex(input, callback);
		    		if(check) return;
		    		var self = this;
		    		this.hexToDec(input, function (res){
		    			self.toOct(res, function (oct){
		    				callback(oct);
		    			});
		    		});
		    	},
		    	hexToDec : function(input, callback){
		    		var check = this.checkIfHex(input, callback);
		    		if(check) return;
		    		var converted = parseInt(input, 16);
		    		callback(converted);
		    	},
    	// TYPEs
    		intToFloat : function(data, digits, callback){
    			if(isNaN(data)){
    				this.error("Input must be a number", callback);
    				return;
    			}
    			if(digits <= 0){
    				this.error("Digits are invalid", callback);
    				return;
    			}
    			var converted = parseFloat(data, 10).toFixed(digits);
    			callback(converted);
    		},
    		floatToInt : function(data, callback){
    			if(isNaN(data)){
    				this.error("Input must be a number", callback);
    				return;
    			}
    			var converted = parseInt(data, 10);
    			callback(converted);
    		},
    		floatRounded : function(data, callback){
    			if(isNaN(data)){
    				this.error("Input must be a number", callback);
    				return;
    			}
    			var converted = Math.round(data);
    			callback(converted);
    		},
    	// DATA/TIME
    		calculateDate : function(now){
    			var year = now.getFullYear();
    			var month = now.getMonth();
    			var day = now.getDate();
    			var dayOfWeek = now.getDay();
    			var hour = now.getHours();
    			var min = now.getMinutes();
    			var sec = now.getSeconds();
    			var dayName = "";
    			switch(dayOfWeek){
    				case 0: dayName = "Sun"; break;
    				case 1: dayName = "Mon"; break;
    				case 2: dayName = "Tue"; break;
    				case 3: dayName = "Wed"; break;
    				case 4: dayName = "Thu"; break;
    				case 5: dayName = "Fri"; break;
    				case 6: dayName = "Sat"; break;
    			}
    			var converted = {
    				year : year,
    				month : month+1,
    				day : day,
    				dayOfWeek : dayName,
    				hour : hour,
    				min : min,
    				sec : sec
    			};
    			return converted;
    		},
    		//get data now
    		getDateNow : function(callback){
    			var now = new Date();
    			var converted = this.calculateDate(now);
    			callback(converted);
    		},
    		//get date now to seconds format
    		datenowToSeconds : function(callback){
    			var now = new Date();
    			var converted = now.getTime();
    			callback(converted);
    		},
    		//get seconds from date
    		dateToSeconds : function(data, callback){
    			var d = new Date(data.year, data.month, data.day, data.hours, data.minutes, data.seconds, 0);
    			var converted = d.getTime();
    			callback(converted);
    		},
    		//get date from seconds
    		secondsToDate : function(data, callback){
    			if(isNaN(data)){
    				this.error("Input must be a number", callback);
    				return;
    			}
    			var now = new Date(data * 1000);
    			var converted = this.calculateDate(now);
    			callback(converted);
    		},
    		//get timezone browser-UTC
    		getTimezone : function(callback){
    			var now = new Date();
    			var converted = now.getTimezoneOffset();
    			callback(converted);
    		},
    		//get time difference between seconds
    		timeDifference : function(from, to, callback){
    			if(from && isNaN(from)){
    				this.error("Input must be a number", callback);
    				return;
    			}
    			if(to && isNaN(to)){
    				this.error("Input must be a number", callback);
    				return;
    			}
    			if(!from){
    				var now = new Date();
    				from = parseInt((now.getTime() / 1000), 10);
    			}
    			if(!to){
    				var now = new Date();
    				to = parseInt((now.getTime() / 1000), 10);
    			}
    			var diff = to - from;
    			var years = "";
    			var months = "";
    			var days = "";
    			var hours = "";
    			var minutes = "";
    			var seconds = "";
    			if(diff > 31536000){
    				years = parseInt((diff / 31536000), 10);
    				diff = diff - (years * 31536000);
    			}
    			if(diff > 2592000){
    				months = parseInt((diff / 2592000), 10);
    				diff = diff - (months * 2592000);
    			}
    			if(diff > 86400){
    				days = parseInt((diff / 86400), 10);
    				diff = diff - (days * 86400);
    			}
    			if(diff > 3600){
    				hours = parseInt((diff / 3600), 10);
    				diff = diff - (hours * 3600);
    			}
    			if(diff > 60){
    				minutes = parseInt((diff / 60), 10);
    				diff = diff - (minutes * 60);
    			}
    			seconds = parseInt(diff, 10);
    			var converted = {
    				years : years,
    				months : months,
    				days : days,
    				hours : hours,
    				minutes : minutes,
    				seconds : seconds
    			};
    			callback(converted);
    		},
    	// JSON
    		jsonToArray : function(data, callback){
    			var converted = [];
    			for(i in Object.keys(data)){
    				var key = Object.keys(data)[i];
    				converted.push(data[key]);
    				// console.log(key);
    				// console.log(data[key]);
    			}
    			callback(converted);
    		},
    		jsonToArrayofArrays : function(data, callback){
    			var converted = [];
    			for(i in Object.keys(data)){
    				var key = Object.keys(data)[i];
    				converted.push([key, data[key]]);
    			}
    			callback(converted);
    		},
    		arrayToJson : function(data, callback){
    			var converted = {}
    			for(i=0; i<data.length; i++)
    				converted[i] = data[i];
    			callback(converted);
    		},
    		arrayToJsonKeyVal : function(data, callback){
    			var converted = {}
    			for(i=0; i<data.length; i+=2)
    				converted[i] = data[i+1];
    			callback(converted);
    		},
    		jsonToString : function(data, callback){
    			var converted = JSON.stringify(data);
    			callback(converted);
    		},
    		stringToJson : function(data, callback){
    			var converted = JSON.parse(data);
    			callback(converted);
    		},
    		arrayToString : function(data, separator, callback){
    			var converted = "";
    			for(i=0; i<data.length; i++)
    				converted += data[i] + separator + " ";
    			converted = converted.substring(0, converted.length-2);
    			callback(converted);
    		},
    		stringToArray : function(data, separator, callback){
    			var converted = [];
    			converted = data.split(separator);
    			callback(converted);
    		},
        // CHECKS
            check : function(data, callback){
                callback(Object.prototype.toString.call(data));
            },
            //type of
                checkIf : function(type, data, callback){
                    var typeOf = Object.prototype.toString.call(data);
                    if(typeOf.indexOf(type) >= 0) callback(true);
                    else callback(false);
                },
                checkIfArray : function(data, callback){
                    this.checkIf("Array", data, callback);
                },
                checkIfNull : function(data, callback){
                    this.checkIf("Null", data, callback);
                },
                checkIfUndefined : function(data, callback){
                    this.checkIf("Undefined", data, callback);
                },
                checkIfNumber : function(data, callback){
                    this.checkIf("Number", data, callback);
                },
                checkIfBoolean : function(data, callback){
                    this.checkIf("Boolean", data, callback);
                },
                checkIfString : function(data, callback){
                    this.checkIf("String", data, callback);
                },
                checkIfObject : function(data, callback){
                    this.checkIf("Object", data, callback);
                },
                checkIfFunction : function(data, callback){
                    this.checkIf("Function", data, callback);
                },
            //regex
                checkMac : function(data, callback){
                    var regex = /^([0-9a-fA-F]{2}[:]){5}([0-9a-fA-F]{2}){1}$/;
                    this.checkRegex(data, regex, "Invalid MAC", callback);
                },
                checkIP : function(data, callback){
                    var regex = /^([0-9]{1,3}[.]){3}([0-9]{1,3}){1}$/;
                    this.checkRegex(data, regex, "Invalid IP", callback);
                },
                checkRegex : function(data, regex, msg, callback){
                    if(!regex.test(data)) this.error(msg, callback);
                    else callback(true);
                },
    };

    module.exports = converter;
})();