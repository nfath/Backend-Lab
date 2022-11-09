const moment = require("moment");

getCurrentDate = () => {
    const wrapped = moment( new Date());
    console.log(wrapped);
}

getCurrentDate();
