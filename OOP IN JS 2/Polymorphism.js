// In this example, both Rectangle and Circle classes have an area() method, but they implement it differently. Polymorphism allows us to call the area() method on different objects (of different classes) using the same interface (Shape), and the appropriate implementation is automatically chosen based on the object type.


class Shape {
    area() {}
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return 3.14 * this.radius * this.radius;
    }
  }
  
  const shapes = [new Rectangle(4, 5), new Circle(3)];
  shapes.forEach(shape => {
    console.log("Area:", shape.area());
  });
  