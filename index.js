
let store = {Driver: [], Passenger: [], Class: []}
// initialize STORE with key of items and users that each point to an empty array



let userId = 0

class Driver {
  constructor(name) {
    this.id = ++userId
    this.name = name
    //insert driver into STORE
    store.Driver.push(this)
  }
}


class Passenger {
  constructor(name) {
    this.id = ++userId
    this.name = name
    //insert Passenger into STORE
    store.Passenger.push(this)
  }
}

class Class {
  constructor(name) {
    this.id = ++userId
    this.name = name
    //insert Class into STORE
    store.Class.push(this)
  }
}
