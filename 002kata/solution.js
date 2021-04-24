// Write a function called repeatStr which repeats the given string string exactly n times.
// Напишите функцию repeatStr, которая повторяет заданную строку ровно n раз.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Отлично, гуглим умножение строки.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// Там был пример: ({ toString: () => 'абв', repeat: String.prototype.repeat }).repeat(2);
// Заменяем в нём 'абв' на s, а чисто повторений (2) на n.

function repeatStr(n, s) {
  return ({ toString: () => s, repeat: String.prototype.repeat }).repeat(n);
}

// Тест проходит. Задачка решена :)

// Оказалось, есть более лаконичное решение данной задачи.
// return s.repeat(n);
