var moment = require("moment");

var getCurrentDate = function(){
    var wrapped = moment(new Date());
    console.log(wrapped);
}

getCurrentDate();
