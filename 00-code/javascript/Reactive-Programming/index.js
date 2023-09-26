const Rx = require("rxjs");

const { Observable, Subject, BehaviorSubject, ReplaySubject } = Rx;

const dooStream = new Subject();

//----------------------------------------------------------------
// Light
//----------------------------------------------------------------

const light = {
  on: function () {
    console.log("Light on");
  },
  off: function () {
    console.log("Light off");
  },
};

dooStream.subscribe({
  next: (event) => {
    let { type } = event;
    switch (type) {
      case "open":
        light.on();
        break;
      case "close":
        light.off();
        break;
      default:
    }
  },
});

//----------------------------------------------------------------
// AC
//----------------------------------------------------------------

const AC = {
  on: function () {
    console.log("AC on");
  },
  off: function () {
    console.log("AC off");
  },
};

dooStream.subscribe({
  next: (event) => {
    let { type } = event;
    switch (type) {
      case "open":
        AC.on();
        break;
      case "close":
        AC.off();
        break;
      default:
    }
  },
});

//----------------------------------------------------------------
// Door module
//----------------------------------------------------------------

class Door {
  open() {
    console.log("Door opened");
    dooStream.next({ type: "open" });
  }
  close() {
    console.log("Door closed");
    dooStream.next({ type: "close" });
  }
}

//----------------------------------------------------------------
const door = new Door();

setTimeout(() => {
  door.open();
  setTimeout(() => {
    door.close();
  }, 2000);
}, 2000);

//----------------------------------------------------------------
