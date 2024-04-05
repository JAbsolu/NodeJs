const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("node:fs");
const fsPromises = require("node:fs").promises;
const path = require("node:path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "MMddMM\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}`;
  console.log(item);
  try {
    await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLogs.txt'), logItem);
  } catch (err) {
    console.error(err);
  }
}

module.exports = logEvents;