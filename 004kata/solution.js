// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// For example:
// Завершите решение, чтобы он сортирует пропущенную в массиве чисел.Если функция проходит в пустом массиве или значение NULL / NIL, то он должен вернуть пустой массив.
// Например:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// Так, отлично. Первое что пришло в голову, это пузырьковая сортировка. Но я вспомнил о квик(быстрой) сортировке. Надо бы её посмотреть... Пока читал мануалы, наткнулся на метод sort() - будем как синьоры пользоваться этим :D.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Метод сортирует массив в соответствии со значениями точек в Unicode. То есть, массив [1, 2, 10, 50, 5] будет отсортирован как [1, 10, 2, 5, 50] - ну или что-то вроде этого.
// Для того чтобы избежать этого, нужно внутри метода можно указать функцию сравнения, которая всё исправляет.
// Так же не забудем добавить проверку массива, чтоб возвращать то, что просят в условии.

function solution(array) {
	function compareNumbers(a, b) {
		return a - b;
	}
	if (array != null) {
		return array.sort(compareNumbers);
	} else {
		return [];
	}
}

// Прошел тесты, и потом прошел какие-то рандомные тесты. А я жоский :D

// Оказалось мой код можно было написать ещё короче
// function solution(array){
//   return (array || []).sort(function(a, b){
//     return a - b
//   });
// }

// Но ничего страшного, нет предела совершенству ;)
