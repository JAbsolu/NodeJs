const logEvents = require("./logEvents");
const eventEmitter = require("events");

class Emitter extends eventEmitter {};

const myEmitter = new Emitter();

myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit("Log", "Log event emitted!")
})