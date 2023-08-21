# Библиотека для работы с геометрическими фигурами.

Архитектура библиотеки должна примерно повторять архитектуру общепринятых в js- разработке стандартных библиотек - https://developer.mozilla.org/ru/docs/Web/API (соблюдение правил наименования классов (использование camelCase), переменных, функций; использование Promise, async/await; использование EventTarget для вызова событий и т.д.)

---

- ## Библиотека
	- должна быть реализована на языке TypeScript ,
	- компилироваться без ошибок с флагами "allowJs" : false и "strict" : true ,
	- может содержать типы any и unknown (допустимо в крайних случаях) .

---

- ## Библиотека
	- должна предоставлять возможность создания и работы с тремя видами геометрических фигур: 
прямоугольник, треугольник и круг.

		> Под созданием фигур подразумевается получение некой структуры (объекта), позволяющей явным образом идентифицировать фигуру. </br>
		Под работой с фигурой подразумевается возможность получить параметры фигуры или каким-либо образом взаимодействовать с ней.</br>
		Например, для объекта прямоугольника, параметрами могут быть ширина и высота. Под взаимодействием с прямоугольником, можно понимать такие задачи, как расчёт площади прямоугольника. Для круга - параметром будет радиус, и расчёт диаметра в качестве взаимодействия.

Набор параметров или способов взаимодействия для каждого типа фигур не специфицирован, и разрабатывается на усмотрение разработчика. Представление фигур в программном коде не специфицировано и реализуется с учетом видения правильной архитектуры у разработчика.

---

Архитектура библиотеки должна позволять добавлять реализацию новых фигур в код библиотеки (например, трапецию или многоугольник с неограниченным количеством вершин) с минимальными временными затратами и с `наиболее логически правильной (решается разработчиком библиотеки)` организацией программного кода.

**Компиляция в бандл или какие-либо дополнительные действия (обфускация, написание конфигурации webpack и т.п.) с программным кодом не требуются.**

**С библиотекой должен поставляться файл Readme.md, содержащий описание способов подключения и работы с библиотекой.**

***Плюсом будет комментирование основных методов API с синтаксисом tsdoc.***


---


# Работа с библиотекой

Методы треугольника:
- `Triangle.base` - получить заданную сторону / задать новое значение
-	`Triangle.height` - получить заданную высоту / задать новое значение
-	`Triangle.getArea()` - получить площадь
-	`Triangle.getPerimeter()` - получить периметр (в качестве аргумента - третья сторона треугольника)

Методы прямоугольника:
- `Rectangle.height` - получить заданную высоту / задать новое значение
- `Rectangle.width` - получить заданную ширину / задать новое значение
- `Rectangle.getArea()` - получить площадь
- `Rectangle.getPerimeter()` - получить периметр

Методы круга:
-	`Circle.radius` - получить заданный радиус / задать новое значение
-	`Circle.getDiameter()` - получить диаметр
- `Circle.getArea()` - получить площадь

## Импорт
```import { Rectangle, Triangle, Circle } from "./src";```

## Пример использования:

<code>
const rectangle: Rectangle = new Rectangle(5, 10);
</br>
console.log("Rectangle area:", rectangle.getArea());
</br>
console.log("Rectangle perimeter", rectangle.getPerimeter());
</br>
console.log("Rectangle width:", rectangle.width);
</br>
rectangle.width = 20;
</br>
console.log("Rectangle new area:", rectangle.getArea());
</code>
