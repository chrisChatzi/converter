(function(){
    'use strict';

    var converter = require("./converter");
    var converterObj = "";

    function connect(data, callback){
    	if(!converterObj) converterObj = new converter();
        // converterObj.secondsToDate(1459327000, callback);
        // converterObj.getDateNow(callback);
        // converterObj.datenowToSeconds(callback);
        // converterObj.timeDifference(1459327000, "", callback);
        converterObj.intToFloat(data, 2, callback);
    };

    module.exports = {
    	connect : connect
    };
})();