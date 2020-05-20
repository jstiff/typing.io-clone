// const fs = require("fs");
const events = require("events");
// const readStream = fs.createReadStream("./sourceCode.txt");
const eventEmitter = new events.EventEmitter();
let objArray = [
  { name: "jason", age: 41 },
  { name: "paul", age: 45 },
];
let handle = (eventData) => {
  console.log(
    `His name is ${eventData.name} and he is ${eventData.age} years old`
  );
  console.log(eventData);
};

// readStream.on("open", () => {
//   console.log("A file has been opened !!!");
// });
eventEmitter.on("fart", handle);
eventEmitter.emit("fart", objArray[1], (poop = true));
