// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// Будем использовать replace() и ещё один метод, который надо мне нагуглить. Называется он toUpperCase().
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// Столкнулся с проблемой, у меня трансформируется 2 символа, вместо одного. После долгой гуглёжки, решил воспользоваться методом charAt(), который возвращает нужный символ из массива. В нашем случае нужен только первый.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

function toCamelCase(str) {
	return str.replace(/[-_]\w/gi, function (match) {
		return match.charAt(1).toUpperCase();
	});
}

// Отлично, тесты проходит. Единственное что можно переделать, так это регулярное выражение выразить в переменной, а так всё вполне ок.
