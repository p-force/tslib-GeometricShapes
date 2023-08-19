import { Rectangle, Triangle, Circle } from "./src";

const rectangle: Rectangle = new Rectangle(5, 10);
console.log("Rectangle area:", rectangle.getArea());

const triangle: Triangle = new Triangle(4, 6);
console.log("Triangle area:", triangle.getArea());

const circle: Circle = new Circle(3);
console.log("Circle area:", circle.getArea());
console.log("Circle diameter:", circle.getDiameter());
