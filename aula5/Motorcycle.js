import Vehicçe from ',/Vehicle.js'

class Motorcycle extends vehicle {

    
    constructor() {
        super();

        this.speed = 50;

        console.log("motorcycle speed", this.speed);
    }
}

const car = new Car();
const motorcycle = new Motorcycle()