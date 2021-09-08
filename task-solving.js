// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
// переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
// `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.

// const value = 27.9;
// Повертає ціле число без дробу
// console.log(Math.floor(value));
// Округлює до більшого цілого числа
// console.log(Math.round(value));
// Округлює до більшого цілого числа
// console.log(Math.ceil(value));

// ========================================================================= //
// Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
// переменные вставленные в строку.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;

// let message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message);

// ========================================================================= //

// Каким будет результат выражений?

// 3
// console.log(true && 3);

// false
// console.log(false && 3);

// kiwi
// console.log(true && 4 && 'kiwi');

// 0
// console.log(true && 0 && 'kiwi');

// true
// console.log(true || 3);

// true
// console.log(true || 3 || 4);

// true
// console.log(true || false || 7);

// Повертає пробіл оскільки він true
// console.log(null || " " || undefined);

// false
// console.log((1 && null && 2) > 0);

// false
// console.log(null > 0)

// 3
// console.log(null || (2 && 3) || 4);

// 3
// console.log(null || 3 || 4);

// null
// console.log("ghbdsn!" && 25 && null);

// ========================================================================= //

// Отрефактори код так, чтобы в переменную `value` присваивалось значение
// переменной `incomingValue`, если оно не равно `undefined` или `null`. В
// противном случае должно присваиваться значение `defaultValue`. Проверь работу
// скрипта для слепдующих значений переменной `incomingValue`: null, undefined, 0,
// false. Используй оператор `??` (nullish coalescing operator).
// Оператор нулевого слияния(??) это логический оператор, который возвращает значение
// правого операнда когда значение левого операнда
// равно null или undefined, в противном случае будет возвращено значение левого операнда.

// const incomingValue = 0;
// const defaultValue = 5;
// const value = incomingValue || defaultValue;
// const value1 = incomingValue ?? defaultValue;

// console.log(value);
// console.log(value1);

// ========================================================================= //

// Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
// строку в формате часов и минут `HH:MM`.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01

// const totalMinutes = 1441;

// const minutes = totalMinutes % 60;
// const hours = Math.floor(totalMinutes / 60);

// String.padStart(2, 0); перше значення методу показуэ довжину якою маэ бути строка, други чим заповнити в резульаты отримаэмо "01"

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);


// ========================================================================= //
// Отображение времени (if...else)
//  Напиши скрипт для отображения часов и минут в консоли браузера
//  в виде строки формата "14 ч. 26 мин.". Если значение переменной
// `minutes` равно `0`, то выводи строку `"14 ч."`, без минут.


 