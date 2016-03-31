(function(){
    'use strict';

    var number = require("./number");
    var numberObj = new number();

    var bit = function(){
        
    };

    bit.prototype = {
        error : function(msg, callback){
            callback(msg);
        },
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
            var check = numberObj.checkIfBinary(data, callback);
            if(check) return;
            if(bits <= 0){
                this.error("Bits are invalid", callback);
                return;
            }
            numberObj.binToDec(data, function (res){
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
            var check = numberObj.checkIfBinary(val1, callback);
            if(check) return;
            var check2 = numberObj.checkIfBinary(val2, callback);
            if(check2) return;
            var self = this;
            numberObj.binToDec(val1, function (res){
                numberObj.binToDec(val2, function (res2){
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
            var check = numberObj.checkIfBinary(data, callback);
            if(check) return;
            numberObj.binToDec(data, function (res){
                var converted = (~res);
                callback(converted);
            });
        },
    };

    module.exports = bit;
})();