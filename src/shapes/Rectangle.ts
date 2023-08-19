import Shape from "./Shape";

/**
  * Класс, представляющий прямоугольник.
  */

class Rectangle extends Shape {

  /**
  * Создает экземпляр прямоугольника.
  * @param width - Ширина прямоугольника.
  * @param height - Высота прямоугольника.
  */

  constructor(private width: number, private height: number) {
    super();
  }

  /**
  * Вычисляет площадь прямоугольника.
  * @returns Площадь прямоугольника.
  */

  getArea(): number {
    return this.width * this.height;
  }
}

export default Rectangle;
