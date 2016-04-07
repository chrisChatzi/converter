(function(){
    'use strict';

    var check = function(){
        
    };

    check.prototype = {
    	//GENERAL
    		error : function(msg, callback){
    			callback(msg);
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
                    var arr = data.split('.');
                    var error = false;
                    $.map(arr, function (item){
                        if(item > 255 || item < 0) error = true;
                    });
                    if(!regex.test(data) || error) this.error(msg, callback);
                    else callback(true);
                },
    };

    module.exports = check;
})();