// This is the first step to understanding FizzBuzz.
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Your expected output is an array of positive integers from 1 to n (inclusive).
// Your job is to write an algorithm that gets you from the input to the output.
// Это первый шаг к пониманию FizzBuzz.
// Ваши входы: положительное целое число, n, больше или равно одному.n предоставляется, вы не контролируете его значение.
// Ваш ожидаемый выход - это массив положительных целых чисел от 1 до n (включительно).
// Ваша задача - написать алгоритм, который получает вас от ввода на выход.

// Что-то слышал про FizzBuzz test. Даже вроде читал что-то на хабре, где синьор девелопер её решал на собеседовании. Надо бы и самому решить :)
// Так, вот тут то нужно будет пораскинуть мозгами. Для начала создадим массив, который в последствии будем возвращать.
// Теперь надо использовать цикл. Сначала хотел использовать do/while. Но в статье, которую я прочитал было написано про цикл for - воспользуюсь им.

function preFizz(n) {
  let array = []
  for (let count = 1; count <= n; count++) {
    array.push(count)
  }
  return array
}
