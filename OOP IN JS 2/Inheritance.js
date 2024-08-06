// In this example, both Dog and Cat classes inherit from the Animal class. They override the speak() method of the Animal class with their own implementations.

class Animal {
    speak() {}
  }
  
  class Dog extends Animal {
    speak() {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    speak() {
      return "Meow!";
    }
  }
  
  const dog = new Dog();
  console.log(dog.speak()); // Output: Woof!
  
  const cat = new Cat();
  console.log(cat.speak()); // Output: Meow!
      