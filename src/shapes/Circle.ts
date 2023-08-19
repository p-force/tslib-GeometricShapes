import Shape from "./Shape";

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getDiameter(): number {
    return this.radius * 2;
  }
}

export default Circle;
