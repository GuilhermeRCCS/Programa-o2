//console.log("hello"):

//let a = 1;
//let b = 0;

//const fibonnaci = () => {

    //for (let i = 0; i < 10, i++) {
        //const temp = a;
        //a = a + b;
        //b = temp;
            //console.log(a);
    //}


    //for (let i = 0; i < 10; i++) {
    //  b = a;
    //  a = a + (b + a);
    //  console.log(a);
    // }
//}

//fibonnaci();

////////////////////////////////////////////////////////////


//let user = {
    //id: 0,
    //name: 'bruno'
    //age: 46,
    //gender: 'male'
    //dob: '24-09-1977'
    //hobbies: ['skate', 'sruf', 'programming']
//}

//for (const key in user) {
    //console.log(key);
//}

//class User {

    //name;
    //age;

    //constructor(user) {

        //this.#name = user.name;
        //this.#age = user.age;
        
        //console.log(this.#ageName());
    //}

    //getName() {
        //return this.#name;
    //}

    //getAge() {
        //return this.age;
    //}

    //set name(value) {
            //this.#name = value;
    //}
    //get name() {
        //return this.#name;
    //}
//}

//const user2 = new User(user);
//console.log(user2.getName());


//////////////////////////////////////////////////////

class Vehicle {

    speed = 10;

    constructor() {

    }

}
console.log(Vehicle);


class Car extends Vehicle {

    constructor() {
        super();

        this.speed = 20;

        console.log(this.speed);
    }
}

class Motorcycle extends vehicle {

    constructor() {
        super();

        this.speed = 50;

        console.log("motorcycle speed", this.speed);
    }
}

const car = new Car();
const motorcycle = new Motorcycle()