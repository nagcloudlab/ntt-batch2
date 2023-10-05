const EventEmitter = require("node:events");

// ----------------------------------------------------------------
// Door
// ----------------------------------------------------------------

class Door extends EventEmitter {
  open() {
    console.log("Door Opened");
    this.emit("open", { floor: 4, door: "2" });
  }
  close() {
    console.log("Door Closed");
    this.emit("close", { floor: 4, door: "2" });
  }
}

const door = new Door();

// ----------------------------------------------------------------
// Light
// ----------------------------------------------------------------

door.on("open", (e) => {
  console.log(`light on - floor:${e.floor} - door: ${e.door}`);
});
door.on("close", (e) => {
  console.log(`light off - floor:${e.floor} - door: ${e.door}`);
});

// ----------------------------------------------------------------
// Fan
// ----------------------------------------------------------------

door.on("open", (e) => {
  console.log(`fan on - floor:${e.floor} - door: ${e.door}`);
});
door.on("close", (e) => {
  console.log(`fan off - floor:${e.floor} - door: ${e.door}`);
});

// ----------------------------------------------------------------

setTimeout(() => {
  door.open();
  setTimeout(() => {
    door.close();
  }, 2000);
}, 2000);
