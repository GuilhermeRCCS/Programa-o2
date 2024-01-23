import Vehicle from "./Vehicle.js";

export default class Boat extends Vehicles {
  constructor(data) {
      super(data);

      console.log(this.brand, this.speed);
  }
}