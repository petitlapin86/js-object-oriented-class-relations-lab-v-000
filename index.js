
let store = {drivers: [], passengers: [], trips: []}
// initialize STORE with key of items and users that each point to an empty array



let driverId = 0 //driver id starts at zero

class Driver {
  constructor(name) {
    this.id = ++driverId //driver id adds 1 each new driver
    this.name = name // stores drivers name
    store.drivers.push(this) //insert drivers into STORE
  }
  newDriver(id, name){
    this.driverId = driver.id
  }
  Trip(){
    return store.Trip.filter((trip)=> {
      return trip.driverId == this.id
    }) //A DRIVER has many trips, this filters over store and returns trips that match drivers id
}
passengers(){
   return this.Trip().map((trip)=> {
     return trip.passenger()
   })//A DRIVER has many passengers, this filters over store and returns trips that match drivers id
}
 }

let userId = 0 //passenger id starts at zero


class Passenger {
  constructor(name) {
    this.id = ++userId
    this.name = name
    //insert Passenger into STORE
    store.passengers.push(this)
  }
  Trip(){
   return store.Trip.filter((trip)=> {
     return trip.passengerId == this.id
   })
}



class Trip {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    //insert Trip into STORE
    store.trips.push(this)
  }
}
