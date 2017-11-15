
let store = {drivers: [], passengers: [], trips: []}
// initialize STORE with key of items and users that each point to an empty array



let driverId = 0 //driver id starts at zero

let driverId = 0
class Driver {
  constructor(name, zipcode){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter((trip)=> {
      return trip.driverId == this.id
    })
  }
  passengers(){
    return this.trips().map((trip)=> {
      return trip.passenger()
    })
  }
}

let passengerId = 0 //passenger id starts at zero


class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    //insert Passenger into STORE
    store.passengers.push(this)
  }
  Trip(){
   return store.Trip.filter((trip)=> {
     return trip.passengerId == this.id
   }) // a passenger goes on many trips. this filters through trips and returns those that match
}
drivers(){
  return this.Trip().map((trip)=> {
    return trip.driver() // a passenger has many drivers this looks over drivers and returns the ones that match
  })
}
}


let tripId = 0  //trip id starts at zero
class Trip {
  constructor(Driver, Passenger, startingZip, endingZip) {
    this.driverId = driverId;
    this.passengerId = passengerId;
    this.id = ++tripId //trip id counts and adds 1 for each new trip
    store.trips.push(this)   //insert Trip into STORE
  }
  driver(){
   return store.drivers.find((driver) => { return driver.id === this.driverId })
 } // a trip could have many different drivers this .find connects them
 passenger(){
   return store.passengers.find((passenger) => { return passenger.id === this.passengerId })
 } // a trip can have many different passengers this .find connects them
}
