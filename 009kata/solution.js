// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Нашел информацию по методу reduce(), который применяет функцию и пробегает по всем элементам массива слева-направо и возвращает результирующее значение.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Так же нашел наводку на XOR. Однако логики работы оператора ^ пока-что понять не могу. Ясен пень, что он работает с двоичной системой и возвращает результат в виде 0 или 1. Но как он взаимодействует с reduce, что у меня выполняются все тесты - вот это хз.

const findOdd = (A) => A.reduce((a, b) => a ^ b);

// Обнаружилось несколько проблем. Начнём с того, что вдруг в массиве не окажется нечётное количество чисел? Результатом будет 0, так же как и при том условии, если ноль был 'нечётным'.
