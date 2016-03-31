(function(){
    'use strict';

    var json = function(){
        
    };

    json.prototype = {
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
    };

    module.exports = json;
})();