// In this example, the _mileage attribute is encapsulated within the Car class. It can only be accessed or modified through the methods of the class, ensuring data integrity and hiding the internal implementation details.
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._mileage = 0; // Private attribute
    }
  
    drive(distance) {
      this._mileage += distance;
    }
  
    get mileage() {
      return this._mileage;
    }
  }
  
  // Creating an instance of the Car class
  const myCar = new Car("Toyota", "Corolla");
  myCar.drive(100);
  console.log("Mileage:", myCar.mileage); // Output: Mileage: 100
  