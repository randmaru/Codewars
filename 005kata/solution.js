// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
// Вернуть номер (счетчик) гласных в данной строке.
// Мы будем рассмотреть a, e, o, u как гласные для этого ката (но не y).
// Входная строка будет состоять только из строчных букв и / или пробелов.

// Будем использовать простой метод match(), в который вставим своё регулярное выражение(regexp).
// https://learn.javascript.ru/regexp-methods
// Что-то у меня ничего не выходит... Спрошу у коллеги на работе, как решить данную задачу.

// function getCount(str) {
//   var vowelsCount = 0;
//   matchArray = str.match(/aeiou/gi)
//   vowelsCount = matchArray.length
//   return vowelsCount;
// }

// Не стерпел и нашел решение в гугле, там всё описано, но как бы хочется самому что-нибудь прикинуть...

function getCount(str) {
	var m = str.match(/[aeiou]/gi);
	return (vowelsCount = m === null ? 0 : m.length);
}

// В решениях после задачи, самая лучшая практика:
// function getCount(str) {
//   return (str.match(/[aeiou]/ig) || []).length;
// }
