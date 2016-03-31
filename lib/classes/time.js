(function(){
    'use strict';

    var time = function(){
        
    };

    time.prototype = {
        error : function(msg, callback){
            callback(msg);
        },
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
    };

    module.exports = time;
})();