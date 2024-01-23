import Vehicle from './Vehicle.js'

export default class Motorocycle extends Vehicles {
  constructor(data) {
    super(data);

    console.log("")
  }


  constructor() {
    super();

    this.speed = 50;

    console.log("motorocycle speed", this.speed);
  }
}