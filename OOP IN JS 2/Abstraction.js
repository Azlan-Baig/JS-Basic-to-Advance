// In this example, the Vehicle class defines an abstract method start(), which must be implemented by its subclasses (Car and Motorcycle). This enforces abstraction, where the Vehicle class provides a blueprint for its subclasses without specifying the exact implementation.


class Vehicle {
    constructor(name) {
      this.name = name;
    }
  
    start() {
      // Abstract method
      throw new Error("Abstract method 'start' must be implemented");
    }
  }
  
  class Car extends Vehicle {
    start() {
      return `Starting ${this.name}`;
    }
  }
  
  class Motorcycle extends Vehicle {
    start() {
      return `Kicking off ${this.name}`;
    }
  }
  
  const car = new Car("Toyota");
  console.log(car.start()); // Output: Starting Toyota
  
  const motorcycle = new Motorcycle("Harley");
  console.log(motorcycle.start()); // Output: Kicking off Harley
  