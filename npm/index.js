const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const date = format(new Date(), 'MM/dd/yyyy\tHH:mm:ss')

console.log("Running nodemon..")
console.log(uuid());
