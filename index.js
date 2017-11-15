
let store = {Driver: [], Passenger: [], Trip: []}
// initialize STORE with key of items and users that each point to an empty array



let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    //insert driver into STORE
    store.Driver.push(this)
  }
  newDriver(id, name){
    this.driverId = driver.id
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

class Trip {
  constructor(name) {
    this.id = ++userId
    this.name = name
    //insert Trip into STORE
    store.Trip.push(this)
  }
}
