// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""
// "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// Надо посмотреть инфу по методу replace(), возможно в нём предусмотрена какая-нибудь шаблонизация.
// Оказывается в неё предусмотрены доп аргументы match и offset, которые мне подойдут.
// Что-то я запарился, начал гуглить и нашел инфу про slice(), который принимает в себя массив и генерирует новый.
// По производительности понятное дело будет гораздо хуже, однако оперировать этим мне легче :)
// Замечательно, функция проходит тест. Осталось узнать насколько позорно я написал код :D

function maskify(cc) {
	if (cc.length > 4) {
		return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
	} else {
		return cc;
	}
}

// Оказывается довольно таки много народа написало так же как и я :D Однако у всех упущена проверка длинны массива.
