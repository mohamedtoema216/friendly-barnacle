// Base class
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    // Helper function to generate a random color
    static generateRandomColor() {
      const colors = ["red", "green", "blue", "yellow"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
  
    // Method to describe the shape
    describe() {
      console.log(`This shape is ${this.color}.`);
    }
  }
  
  // Subclass
  class Circle extends Shape {
    constructor(radius, color) {
      super(color);
      this.radius = radius;
    }
  
    // Method to calculate the area of the circle
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Example usage
  const color = Shape.generateRandomColor();
  const circle = new Circle(5, color);
  circle.describe(); // Output will be "This shape is <color>."
  console.log(`The area of the circle is ${circle.calculateArea().toFixed(2)}.`);