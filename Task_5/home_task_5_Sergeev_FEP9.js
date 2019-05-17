"use strict";

function answerTask1() {
    /*Создайте объект calculator с методами:
        read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
        sum() возвращает сумму этих двух значений
        multi() возвращает произведение этих двух значений
        diff() возвращает разницу
        div() возвращает частное*/

    let calculator = {
        read: function () {
            this.x = +prompt("Введите число x", 15);
            this.y = +prompt("Введите число y", 3);
        },
        sum: function () {
            return this.x + this.y;
        },
        multi: function () {
            return this.x * this.y;
        },
        diff: function () {
            return this.x - this.y;
        },
        div: function () {
            return this.x / this.y;
        }
    };

    calculator.read();
    alert(`Сумма: ${calculator.x}+${calculator.y}=${calculator.sum()}`);
    alert(`Умножение: ${calculator.x}х${calculator.y}=${calculator.multi()}`);
    alert(`Разница: ${calculator.x}-${calculator.y}=${calculator.diff()}`);
    alert(`Деление: ${calculator.x}:${calculator.y}=${calculator.div()}`);
}

function answerTask2() {
    /*Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’
    и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением,
    записанным в свойстве объекта message.*/

    let coffeeMachine = {
        message: "Your coffee is ready!",
        start: function () {
            setTimeout(() => alert(this.message), 3000);
        }
    };

    coffeeMachine.start();
}

function answerTask3() {
    /*Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения.
    Используйте концепцию chaining для создания цепочки вызовов.*/

    let counter = {
        count: 0,
        inc: function () {
            this.count++;
            return this;
        },
        dec: function () {
            this.count--;
            return this;
        },
        getValue: function () {
            return this.count;
        }
    };

    let current = counter.inc().inc().dec().inc().dec().getValue();
    alert(current);

}

function answerTask4() {
    /*Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют,
     а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’.
     Для расчетов все методы используют функционал ранее созданного калькулятора.*/

    let calculator = {
        read: function (obj) {
            this.x = obj.x;
            this.y = obj.y;
        },
        sum: function () {
            return this.x + this.y;
        },
        multi: function () {
            return this.x * this.y;
        },
        diff: function () {
            return this.x - this.y;
        },
        div: function () {
            return this.x / this.y;
        }
    };

    let me = {
        x: 0,
        y: 0,
        getSum: function (x, y) {
            this.getValues(x, y);
            return `${x} + ${y} = ${calculator.sum()}`;
        },
        getDiff: function (x, y) {
            this.getValues(x, y);
            return `${x} - ${y} = ${calculator.diff()}`;
        },
        getMulti: function (x, y) {
            this.getValues(x, y);
            return `${x} * ${y} = ${calculator.multi()}`;
        },
        getDiv: function (x, y) {
            this.getValues(x, y);
            return `${x} / ${y} = ${calculator.div()}`;
        },
        getValues: function (x, y) {
            this.x = x;
            this.y = y;
            calculator.read(this);
        }
    };
    alert(me.getSum(1, 1));
    alert(me.getDiv(1, 0));
    alert(me.getDiff(3, 2));
    alert(me.getMulti(2, 3));

}

function answerTask5() {
    /*Есть следующий код:
    * Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:*/

    let country = {
        name: 'Ukraine',
        language: 'ukrainian',
        capital: {
            name: 'Kyiv',
            population: 2907817,
            area: 847.66
        }
    };

    function format(start, end) {
        console.log(start + this.name + end);
    }

    format.call(country, '', ''); // Ukraine
    format.apply(country, ['[', ']']); // [Ukraine]
    format.call(country.capital, '', ''); // Kyiv
    format.apply(country.capital, ['', '']); // Kyiv
    format.apply({}, ['', '']); // undefined

}

function answerTask6() {
    /*Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
    *
    * Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
    * Реализуйте 2 версии текущего задания, используя:
        1. Анонимную функцию;
        2. Метод bind().
*/


    let user = {
        name: "John"
    };

    function format(start, end) {
        console.log(start + this.name + end);
    };

    function userFormat(left, right) {
        format.call(user, left, right);
    };

    function userFormat2(left, right) {
        let b = format.bind(user);
        b(left, right);
    };


    userFormat('<<<', '>>>');
    userFormat2('<<<', '>>>');
}


function answerTask7() {
    /*Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом:
    разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello,
    которая которая выводит приветствие тому, кто передан в ее параметре: */

    let concat = (helloStr, delimiter, anotherStr) => {
        console.log(helloStr + delimiter + anotherStr)
    };
    let hello = concat.bind(null, "Hello", " ");

    hello('World'); // Hello World
    hello('John'); // Hello John

}

function answerTask8() {
    /*Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3)
    a) используя цикл
    b) используя рекурсию:*/

    let cube1 = (x) => {
        let temp = 1;
        for (let i = 0; i < 3; i++) temp *= x;
        return temp;
    };

    let count = 0;
    let cube2 = (x) => {
        return (count++ !== 2) ? x * cube2(x) : x;
    };

    console.log(cube1(2));
    console.log(cube2(2));
}

function answerTask9() {
    /*Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:*/
    let count = 0;
    let sum = (...args) => {
        if (args.length !== 0) {
            count += args[args.length - 1];
            args.length = args.length - 1;
            return sum(...args);
        }
        return count;
    };

    console.log(sum(1, 2, 3, 4, 5));
}