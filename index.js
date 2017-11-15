
let store = {drivers: [], passengers: [], trips: []}

let driverId = 0 //begins at zero
class Driver { // define a class Driver
  constructor(name){ // takes one argument
    this.name = name
    this.id = ++driverId //counts adding one each new id number
    store.drivers.push(this) //pushes this info to the store array
  }
  trips(){
    return store.trips.filter((trip)=> {
      return trip.driverId == this.id //a driver has many trips. filters over and returns trips that match
    })
  }
  passengers(){
    return this.trips().map((trip)=> {
      return trip.passenger() // a driver takes many passengers uses .map
    })
  }
}

let passengerId = 0 //starts at zero

class Passenger { // define a class Passenger
  constructor(name){ // takes an argument of name
    this.name = name
    this.id = ++passengerId // counts and adds 1 for each new id number
    store.passengers.push(this) //pushes info to store array
  }

  trips(){
    return store.trips.filter((trip)=> {
      return trip.passengerId == this.id
    }) // a passenger can go on many trips .filter over and return ids that match
  }
  drivers(){
    return this.trips().map((trip)=> {
      return trip.driver()
    }) // a passenger can have many drivers, uses .map to return drivers that match
  }
}

let tripId = 0 // starts keeping track at zero
class Trip { // define a class Trip
  constructor(driver, passenger){
    this.driverId = driverId;
    this.passengerId = passengerId;
    this.id = ++tripId // counts and adds 1 for each new id
    store.trips.push(this) // pushed this info to store array
  }
  driver(){
    return store.drivers.find((driver) => { return driver.id === this.driverId })
  } // i dont understand what this does
  passenger(){
    return store.passengers.find((passenger) => { return passenger.id === this.passengerId })
  } // i dont understand what this does
}
