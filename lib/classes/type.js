(function(){
    'use strict';

    var type = function(){
        
    };

    type.prototype = {
        error : function(msg, callback){
            callback(msg);
        },
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
    };

    module.exports = type;
})();