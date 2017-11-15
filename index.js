
let store = {Driver: [], Passenger: [], Class []}
// initialize DRIVERS? with key of items and users that each point to an empty array



let userId = 0

class Driver {
  constructor(name) {
    this.id = ++userId
    this.name = name
    //insert driver into DRIVER?
    store.Driver.push(this)
  }
}
