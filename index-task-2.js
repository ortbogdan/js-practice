/**
 * Отображение времени (if...else)
 *
 * Напиши скрипт для отображения часов и минут в консоли браузера
 * в виде строки формата "14 ч. 26 мин.". Если значение переменной
 * `minutes` равно `0`, то выводи строку `"14 ч."`, без минут.
 */

// const hours = 28;
// const minutes = 14;
// if (minutes === 0) {
//   console.log(`${hours} ч.`);
// } else {
//   console.log(`${hours} ч. ${minutes} мин.`);
// }

// function logTime(hours, minutes) {
//     if (minutes === 0) {
//         return `${hours} ч.`;
//     } else {
//         return `${hours} ч. ${minutes} мин.`;
//     }
// }

// console.log(logTime(28, 14));

// console.log(logTime(28, 0));

/**
 * Ветвеления
 *
 * Напиши скрипт, который выводит в консоль строку "Это положительное число",
 * если в prompt пользователь ввел число больше нуля. Если был введен ноль,
 * выводи в консоль строку `"Это ноль"`. Если передали отрицательное число,
 * в консоли должна быть строка `"Это отрицательное число"`.
 */

// let userInput = prompt('Введите число');
// userInput = Number(userInput);

// if (userInput > 0) {
//     console.log('Это положительное число');
// } else if (userInput === 0) {
//     console.log('Это ноль');
// } else {
//     console.log('Это отрицательное число');
// }

// function logMessage(number) {
//   if (number > 0) {
//     console.log('Это положительное число');
//   } else if (number === 0) {
//     console.log('Это ноль');
//   } else {
//     console.log('Это отрицательное число');
//   }
// }

// logMessage(userInput);

/**
 * Вложенные ветвления
 *
 * Напиши скрипт, который сравнивает числа в переменных `a` и `b`.
 * Если оба значения больше `100`, то выведи в консоль максимальное из них.
 * В противном случае в консоли должна быть сумма значения `b` и числа 512.
 */

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

/**
 * Форматирование ссылки (endsWith)
 *
 * Напиши скрипт который проверяет заканчивается ли значение
 * переменной `link` символом `/`. Если нет, добавь в конец
 * значения `link` этот символ. Используй конструкцию `if...else`.
 */

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);

// function appendUrl(url) {
//     let link = url;

//     if (!link.endsWith('/')) {
//         link += '/';
//     }

//     return link;
// }

// console.log(appendUrl('https://my-site.com/about'));

// console.log(appendUrl('https://my-site.com/about/'));

/**
 * Форматирование ссылки (includes и логическое «И»)
 *
 * Напиши скрипт который проверяет заканчивается ли значение
 * переменной `link` символом `/`. Если нет, добавь в конец
 * значения `link` этот символ, но только в том случае, если
 * в `link` есть подстрока `"my-site"`. Используй конструкцию `if...else`.
 */

// let link = 'https://my-site.com/about';

// if (link.includes('my-site') && !link.endsWith('/')) {
//     link += '/';
// }

// console.log(link);

/**
 * Форматирование ссылки
 */

// function appendUrl(url) {
//   let link = url;
//   if (link.includes('my-site') && !link.endsWith('/')) {
//     link += '/';
//   }
//   return link;
// }

// console.log(appendUrl('https://my-site.com/about'));

// console.log(appendUrl('https://somesite.com/about'));

/**
 * if...else и логические операторы
 *
 * Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной
 * `hours`.
 *
 * Если значение переменной `hours`:
 *
 * - меньше `17`, выводи строку `"Pending"`
 * - больше либо равно `17` и меньше либо равно 24, выводи строку `"Expires"`
 * - больше `24` , выводи строку `"Overdue"`
 */

// 

/**
 * Дедлайн сдачи проекта (if...else)
 *
 * Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию `if...else`.
 *
 * - Eсли до дедлайна 0 дней - выведи строку `"Сегодня"`
 * - Eсли до дедлайна 1 день - выведи строку `"Завтра"`
 * - Eсли до дедлайна 2 дня - выведи строку `"Послезавтра"`
 * - Eсли до дедлайна 3+ дней - выведи строку `"Дата в будущем"`
 */

// const daysUntilDeadline = 2;

// if (daysUntilDeadline === 0) {
//     console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//     console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//     console.log('Послезавтра');
// } else {
//     console.log('Дата в будущем');
// }

/**
 * Дедлайн сдачи проекта (switch)
 *
 * Выполни рефакторинг кода задачи номер 8 используя `switch`.
 *
 */

// const daysUntilDeadline = 2;

// switch (daysUntilDeadline) {
//     case 0:
//         console.log('Сегодня');
//         break;
//     case 1:
//         console.log('Завтра');
//         break;
//     case 2:
//         console.log('Послезавтра');
//         break;
//     default:
//         console.log('Дата в будущем');
// }

/**
 * Цикл for
 *
 * Напиши цикл for который выводит в консоль браузера числа
 * по возрастанию от `min` до `max`, но только если число кратно 5.
 */

// const max = 97;
// const min = 18;

// for (let i = min; i <= max; i += 1) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }