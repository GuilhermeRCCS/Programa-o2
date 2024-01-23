import Vehicle from "./Vehicle.js";

export default class Car extends Vehicles {
  constructor(data) {
      super(data);

      this.speed = 20;

      console.log(this.brand, this.speed);
  }
}