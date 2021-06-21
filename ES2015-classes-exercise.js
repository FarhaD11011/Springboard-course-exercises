// Part One:
class Vehicle {
    constructor(make, model, year){
        this.make = make; 
        this.model = model;
        this.year = year;
    }

    honk(){
    return 'Beep.';
    }

    toString(){
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

// Part Two:
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 4;
    }
}

// Part Three:
class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 2;
    }
  revEngine(){
      return "VROOM!!!";
      }
    }


// Part Four:
class Garage {
    constructor(place) {
      this.vehicles = [];
      this.place = place;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.place) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }

//   let garage = new Garage(2);
// garage.vehicles; // []
// garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
// garage.vehicles; // [Car]
// garage.add("Taco"); // "Only vehicles are allowed in here!"

// garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// // "Vehicle added!"
// garage.vehicles; // [Car, Motorcycle]

// garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// // "Sorry, we're full."