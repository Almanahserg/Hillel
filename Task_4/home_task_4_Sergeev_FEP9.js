"use strict";

function answerTask1() {
    /*Напишите функцию max, которая сравнивает два числа и возвращает большее*/

    let max = (a, b) => (a > b) ? a : b;
    console.log(max(1, 3));
}

function answerTask2() {
    /*Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:*/

    let findMin = (...params) => {
        let min = params[0];
        params.forEach(function (value) {
            if (min > +value) min = +value;
        });
        return min;
    };

    alert(`минимальное значение: ${findMin(0, -1, 100, 500, 100500)}`);
}

function answerTask3() {
    /*Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов),
    каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:
        Отфильтруйте пользователей младше 18 лет
        Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
        Сформируйте новый массив, который содержит только полное имя пользователей*/

    let createPers = (...data) => {
        let firstName = data[0];
        let lastName = data[1];
        let age = data[2];
        return {firstName, lastName, age};
    };

    let users = [
        createPers("Ivan", "Kravetc", 24),
        createPers("Svetlana", "Lupina", 62),
        createPers("Grag", "McGrands", 101),
        createPers("Stive", "Fluster", 61),
        createPers("Boris", "Ivanov", 12),
        createPers("Katerina", "Govina", 5),
        createPers("Vasiliy", "Initasov", 27),
        createPers("Olga", "Muhina", 44),
        createPers("Filipp", "Kirkorov", 50),
        createPers("Anna", "Srovkina", 57)
    ];
    console.log("Созданные пользователи");
    console.log(users);

    users.map(pers => {
        pers['fullName'] = pers.firstName + ' ' + pers.lastName;
    });
    console.log("Добавлены fullName");
    console.log(users);

    let less18 = users.filter(pers => pers.age < 18);
    console.log("Список младше 18");
    console.log(less18);

    let onlyFullName = users.map(user => user.fullName);
    console.log("Список только fullName");
    console.log(onlyFullName);
}

function answerTask4() {
    /*Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.*/

    let delFirstElement = (array) => {
        let newArr = [];
        for (let i = 1; i < array.length; i++) {
            newArr.push(array[i]);
        }
        return newArr;
    };

    let array = [1, 2, 65, 6, 71];
    alert(delFirstElement(array));
}

function answerTask5() {
    /*Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив
    произвольное количество элементов.*/

    let addElements = (array, ...elements) => {
        elements.forEach(elem => array[array.length] = elem);
        return array;
    };

    let array = [1, 2, 65, 6, 71];
    alert(addElements(array, 64, 46, 5, 4));
}

function answerTask6() {
    /*Напишите функцию аналог метода Object.assign().
    Первый параметр функции - целевой объект, поля которого будут изменены или расширены.
    Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.*/

    let extend = (obj, ...params) => {
        let newObj = {};
        for (let key in obj) newObj[key] = obj[key];

        params.forEach(param => {
            for (let key in param) {
                newObj[key] = param[key];
            }
        });
        return newObj;
    };

    let source = {firstname: 'Tom', age: 10};
    let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
    console.log(source);
    console.log(s);
}


function answerTask7() {
    /*Напишите функцию setComment с параметрами: date, message, author.
    Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют,
    то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно.
    Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’.
    Функция распечатывает в консоле текст в формате: */

    let setComment = (date, message, author) => {
        if (date && message) {
            console.log('%c%s', 'font-weight: bold;', `${(author || "Anonymous")}, ${date}`);
            console.log(message);
        } else {
            alert("Данные переданы некорректно");
        }

    };

    setComment('2016-11-02', 'Everything is ok', 'John');
    setComment('2016-11-02', 'You could do it better!');
}

function answerTask8() {
    /*Используя замыкание, напишите функцию createTimer, которая использует метод performance.now()
    для получения текущей временной метки и служит для замера времени выполнения другого кода:*/

    let createTimer = () => {
        let t = performance.now();
        return () => performance.now() - t;
    };

    let timer = createTimer();
    alert('!');
    alert(timer());
}

function answerTask9() {
    /*Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и
    возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:*/

    let createAdder = (elem) => {
        let first = elem;
        return (second) => first + second;
    };

    var hello = createAdder('Hello, ');
    alert(hello('John'));
    alert(hello('Harry'));

    var plus = createAdder(5);
    alert(plus(1));
    alert(plus(5));

}