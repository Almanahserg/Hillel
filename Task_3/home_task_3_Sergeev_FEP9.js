"use strict";

let person = {
    "имя": "Степан",
    "фамилия": "Великанович",
    "рост": 230,
    "работа": "космонавт"
};

function answerTask1() {
    /*Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
    Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.*/

    let array = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
    let sum = 0;
    for (let value of array) {
        if (!isNaN(value)) sum += +value;
    }
    alert(sum);
}

function answerTask2() {
    /*Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
    Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень,
    не используя функцию Math.pow().*/

    let array = [];
    let arrayPow = [];
    let n = Math.floor(Math.random() * 10) + 10;
    for (let i = 0; i < n; i++) {
        let random = Math.round(((Math.random() * 99) + 1) * 100) / 100;
        array[i] = random;
        arrayPow[i] = random ** 5;
    }
    console.log(array);
    console.log(arrayPow);
}

function answerTask3() {
    /*Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
    Добавьте в начало массива значение ‘Backbone.js’
    Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
    Добавьте в массив значение ‘CommonJS’ вторым элементом
    Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”*/

    let array = ["AngularJS", "jQuery"];
    array.unshift("Backbone.js");
    array.push("ReactJS", "Vue.js");
    array.splice(1, 0, "CommonJS");
    let index = array.indexOf("jQuery");
    if (index !== -1) {
        alert("Это здесь лишнее: " + array.splice(index, 1));
    }
    console.log(array);
}

function answerTask4() {
    /*Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь городской’.
    Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice...).
    Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.*/

    let str = "Как однажды Жак звонарь сломал фонарь городской";
    let arr = str.split(" ");
    let del = arr.splice(arr.indexOf("городской"), 1);
    arr.splice(4, 0, del);
    alert(str + "\n" + arr.join(" "));

}

function answerTask5() {
    /*Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей.
    С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран.
    Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.*/

    let key = prompt("Введите свойство");
    if (!person[key]) {
        person[key] = prompt(`Свойства "${key}" не было задано, но теперь оно есть :)
        Введите для него значение`);
    } else {
        alert(`${key}: ${person[key]}`);
    }

    console.log(person);
}

function answerTask6() {
    /*Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt
    (например: brand, model, resolution, color...), не используя вспомогательные переменные.
    Добавьте этот гаджет персоне, созданной ранее.*/

    let gadget = {};
    while (true) {
        let key = prompt("Новое своство гаджета", "");
        if (key === "" || key === null) break;
        gadget[key] = prompt(`Введите значение для "${key}"`, "");
    }
    person["гаджет"] = gadget;
    console.log(person);
}


function answerTask7() {
    /*Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая дата – текущая дата минус 365 дней.
    Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.*/

    let dates = {
        today: new Date(),
        yearAgo: new Date()
    };

    let {today: d} = dates;
    let {yearAgo: yA} = dates;

    yA.setDate(yA.getDate() - 365);

    let todayYYYY = d.getFullYear();
    let todayMM = ((d.getMonth() < 9) ? "0" : "") + (d.getMonth() + 1);
    let todayDD = ((d.getDate() < 10) ? "0" : "") + d.getDate();

    let yearAgoYYYY = yA.getFullYear();
    let yearAgoMM = ((yA.getMonth() < 9) ? "0" : "") + (yA.getMonth() + 1);
    let yearAgoDD = ((yA.getDate() < 10) ? "0" : "") + yA.getDate();

    let valuePrompt = prompt("Введите дату", "2019-01-25");
    let userDate = new Date(valuePrompt);
    let message = (userDate >= yA && userDate < d) ? "входит" : "не входит";

    alert(`
    Введенная пользователем дата: ${valuePrompt};
    Диапазон: от ${yearAgoYYYY}-${yearAgoMM}-${yearAgoDD} до ${todayYYYY}-${todayMM}-${todayDD};
    Введенная пользователем дата ${message} в диапазон.
    `);
}

function answerTask8() {
    /*Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов,
    полученное значение добавляйте в конец созданного массива.
    После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.*/

    let array = [];
    let n = Math.floor(Math.random() * 15);
    for (let i = 0; i < n; i++) {
        array.push(prompt("Введите любое значение", ""));
    }
    let sum = 0;
    for (let value of array) {
        if (!isNaN(value)) sum += +value;
    }
    alert(sum);
}

function answerTask9() {
    /*Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения*/

    let obj = {};
    for (let i = 1; i < 10; i++) {
        obj[i] = [];
        for (let j = 1; j < 11; j++) {
            obj[i].push(`${i}x${j}=${i*j}`)
        }
    }
    console.log(obj);
}

function answerTask10() {
    /*Создайте структуру данных, полностью описывающую html-разметку картинки*/

    const markup = {
        tag: "img",
        src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_col or 272x92dp.png",
        alt: "",
        style: "border: 1px solid #ccc",
        width: 200
    };

    console.log(markup);
}