


let userId = 0

class driver {
  constructor(name) {
    this.id = ++userId
    this.name = name
    //insert driver into DRIVER?
    driver.users.push(this)
  }
}
