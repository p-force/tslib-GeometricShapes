import Shape from "./Shape";

class Triangle extends Shape {
  constructor(private base: number, private height: number) {
    super();
  }

  getArea(): number {
    return (this.base * this.height) / 2;
  }
}

export default Triangle;
