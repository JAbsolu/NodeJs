const logEvents = require("./logEvents");
const eventEmitter = require("events");

class EventEmitter extends eventEmitter {};

const myEmitter = new EventEmitter();

myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit("log", "Log event emitted!")
}, 2000);