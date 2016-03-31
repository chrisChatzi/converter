(function(){
    'use strict';

    var number = function(){
        
    };

    number.prototype = {
        error : function(msg, callback){
            callback(msg);
        },
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
    };

    module.exports = number;
})();