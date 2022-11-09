const moment = require("moment");

getCurrentDate = () => {
    const wrapped = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(wrapped);
}

getCurrentDate();
