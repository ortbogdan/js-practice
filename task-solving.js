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

// const totalMinutes = 121;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// if (minutes === 0) {
//     console.log(`${hours} ч.`);
// }
// else {
//     console.log(`${hours} ч. ${String(minutes).padStart(2, 0)} мин.` )
// }
 
// ========================================================================= //
/**
 * Ветвеления
 *
 * Напиши скрипт, который выводит в консоль строку "Это положительное число",
 * если в prompt пользователь ввел число больше нуля. Если был введен ноль,
 * выводи в консоль строку `"Это ноль"`. Если передали отрицательное число,
 * в консоли должна быть строка `"Это отрицательное число"`.
 */

// const number = prompt('Введите число');
// if (number >= 0) {
//     console.log('Это положительное число');
// }
// else if (number === 0) {
//     console.log("Это ноль");
// }
// else if (number < 0) {
//    console.log("Это отрицательное число");
//     }
// else {
//     console.log("Ви ввели не число");
// }

// const userInput = prompt('Введите число');
// const number = Number(userInput); // приведення до числа

// function logMessage(number) {
//     if (number > 0) {
//         console.log('Вы ввели положытельное число');
//     }
//     else if (number === 0) {
//         console.log('Вы ввели ноль');
//     }
//     else {
//         console.log('Вы ввели отрицательное число');
//     }
// }
// ========================================================================= //

/**
 * Вложенные ветвления
 *
 * Напиши скрипт, который сравнивает числа в переменных `a` и `b`.
 * Если оба значения больше `100`, то выведи в консоль максимальное из них.
 * В противном случае в консоли должна быть сумма значения `b` и числа 512.
 */
// const a = 140;
// const b = 120;

// if (a > 100 && b > 100) {
//     console.log(a > b ? a : b); // тернарник
// }
// else {
//     console.log(b + 512);
// }
// ========================================================================= //
/**
 * Форматирование ссылки (endsWith)
 *
 * Напиши скрипт который проверяет заканчивается ли значение
 * переменной `link` символом `/`. Если нет, добавь в конец
 * значения `link` этот символ. Используй конструкцию `if...else`.
 */
// let link = 'https://my-site.com/about';

// if (link.endsWith('/')) {
//     console.log(link);
// }
// else {
//     console.log(link + '/');
// }

// console.log(link.endsWith('/') ? link : link + '/')\
// ========================================================================= //
/**
 * Форматирование ссылки (includes и логическое «И»)
 *
 * Напиши скрипт который проверяет заканчивается ли значение
 * переменной `link` символом `/`. Если нет, добавь в конец
 * значения `link` этот символ, но только в том случае, если
 * в `link` есть подстрока `"my-site"`. Используй конструкцию `if...else`.
 */
// let link = 'https://my-site.com/about';

// if (!link.includes('/') && link.includes("my-site")) {
//     console.log(linl + '/');
// }
// else {
//     console.log(link);
// }
// ========================================================================= //
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
// const hours = 66;
// if (hours < 17) {
//     console.log("Pending");
// }
// else if (hours >= 17 && hours <= 24) {
//     console.log("Expires");
// }
// else {
//     console.log("Overdue");
// }

// ========================================================================= //
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
// const day = 2;
// const deadline = Number(day);

// if (deadline === 0) {
//     console.log("Сегодня");
// }
// else if (deadline === 1) {
//     console.log("Завтра");
// }
// else if (deadline === 2) {
//     console.log("Послезавтра");
// }
// else if (Math.sign(deadline) === -1) { // Метод Math.sign повертає значення -1 якщо число від'ємне, +1 як додатнє, 0, -0 и NaN
//     console.log("Введите коректное значение");  
//     }
// else {
//     console.log("Дата в будущем");
// }
// switch (deadline) {
//     case 0: console.log("Сегодня");
//         break;
//     case 1: console.log("Завтра");
//         break;
//     case 2: console.log("Послезавтра");
//         break;
//     default: console.log("Дата в будущем");
// }
// ========================================================================= //
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
// ========================================================================= //
// Напиши скрипт, який імітує авторизацію адміністратора в панелі управління.

// Є змінна `message` в яку буде записано повідомлення про результат. При
// завантаженні сторінки у відвідувача запитується пароль через `prompt`:

// - Якщо натиснули `Cancel`, записати в `message` рядок
//   `'Скасовано користувачем!'`
// - В іншому випадку, якщо введений пароль який збігається зі значенням константи
//   `ADMIN_PASSWORD`, записати в `message` рядок `'Ласкаво просимо!'`
// - В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в
//   `message` рядок `'Доступ заборонений, невірний пароль!'`
// - Після всіх перевірок вивести в `alert` значення змінної `message`.

// const ADMIN_PASSWORD = '1234';
// const password = prompt('Введите пароль');
// let message = "";
// function sendMessage( password ) {
    
//     if (password === ADMIN_PASSWORD) {
//         message = 'Ласкаво просимо!';
//     }
//     else if (password === null) {
//         message = 'Скасовано користувачем!';
//     }
//     else {
//          message = 'Доступ заборонений, невірний пароль!';
//     }
//    return alert(message);
//     }
// sendMessage();
// ========================================================================= //
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName -
//     название продукта.Функция ищет объект продукта с таким именем(свойство name) в массиве products и
// возвращает его цену
//     (свойство price).Если продукт с таким названием не найден, функция должна возвращать null.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     for (let product of products) {
//         if (productName === product.name) {
//             return product.price
            
//     }
// }
// return null

//   // Change code above this line
// }
// console.log(getProductPrice("Radar"));
// ========================================================================= //
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propNames = [];

//   for (const product of products) {
//     if (product[propName]) {
//       propNames.push(product[propName]);
//     }
//   }
//   return propNames;
//   // Change code above this line
// }
// console.log(getAllPropValues("price"))
// ========================================================================= //
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     for (const product of products) {
//         if (product.name === productName) {
//             return (product.price * product.quantity);
//         }
//     }
//     return 0;
// }

// console.log(calculateTotalPrice("tyrtyrty"))
//   // Пиши код выше этой строки

  // ========================================================================= //
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи,
//     не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два,
//     category и priority, могут отсутствовать.Тогда, в новом объекте задачи,
//         в свойствах category и priority должны быть значения по умолчанию, 
// хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     return { priority, category, completed, ...data, }
//   // Change code above this line
// }
// console.log(makeTask({}));

// function add(...args) {
//   let totalValue = 0;
//   for (let arg of args) {
//   totalValue += arg; }
//   return totalValue;
//   // Change code above this line
// }
// console.log(add(5, 7, 9));
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions

// ========================================================================= //
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
    
//     getPotions() {
        
//         return this.potions;  
//     },
    
//     addPotion(newPotion) {
//       for (let potion of this.potions)
//          if (potion.name === newPotion.name) {
//     return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions.push(newPotion);
//   },
    
//     removePotion(potionName) {
//         const { potions } = this;
//         for (let i = 0; i < potions.length; i += 1) {

//             const { name } = potions[i]
//             if (name === potionName) {
//               return potions.splice(i, 1)  
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === oldName) {
//                 return this.potions[i].name = newName;
//             }
            
//         }
//         return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions())
// console.log(atTheOldToad.addPotion({ name: "Dragon", price: 780 }));
// console.log(atTheOldToad.removePotion("Dragon breath"))
// console.log(atTheOldToad.updatePotionName("Dragon", "New Dragon"))
// ========================================================================= //
// На рахунку користувача є `23580` кредитів, значення зберігається в змінній
// `credits` (створи і привласни). Користувач вирішує купити ремонтних дроїд, які
// коштують по `3000` кредитів за штуку. Ціна одного дроїда зберігається в змінній
// `pricePerDroid` (створи і привласни).

// При відвідуванні сторінки, використовуючи `prompt`, необхідно запитати кількість
// дроїдів, які користувач хоче купити і зберегти в змінну.

// Напиши скрипт який:

// - Якщо в `prompt` була натиснута кнопка `Cancel`, виводить в консоль
//   повідомлення `'Скасовано користувачем!'`.
// - В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній
//   `totalPrice`.
// - Перевіряє чи зможе користувач оплатити замовлення:
//   - якщо сума до оплати перевищує кількість кредитів на рахунку, виводь в
//     консоль повідомлення `'Недостатньо коштів на рахунку!'`.
//   - в іншому випадку необхідно порахувати залишок кредитів на рахунку і вивести
//     повідомлення
//     `'Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.'`.

// let credits = 23580;
// const pricePerDroid = 3000;
// let bayDroid = prompt();
// let totalPrice = bayDroid * pricePerDroid;

// if (bayDroid > 0 && totalPrice <= credits ) {
//     console.log( `Ви купили ${bayDroid} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів.`);
// } else if (totalPrice > credits) {
//     console.log('Недостатньо коштів на рахунку!');
// }
// else {
//     console.log('Скасовано користувачем!');
// }
// ========================================================================= // Масиви і функції
// Напиши функцію `logItems(array)`, яка отримує масив і використовує цикл `for`,
// який для кожного елемента масиву буде виводити в консоль повідомлення в форматі
// `[номер елемента] - [значення елемента]`.

// Нумерація повинна починатися з `1`. Наприклад, для першого елемента масиву
// `['Mango', 'Poly', 'Ajax']` з індексом `0` буде виведено `'1 - Mango'`, а для
// індексу `2` виведе `'3 - Ajax'`.
// const logItems = function (array) {

//     for (let item of array) {
//         console.log(`${array.indexOf(item)+1}: ${item}`);
//     }
// };
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])
// ========================================================================= //
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію
// `calculateEngravingPrice(message, pricePerWord)` приймаючу рядок (в рядку будуть
// тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну
// гравіювання всіх слів в рядку.
// const calculateEngravingPrice = function (message, pricePerWord) {
//     const messageArray = message.split(' ');
//     const finalPrice = messageArray.length * pricePerWord;
//     return finalPrice;
// };
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160
// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240
// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120
// ========================================================================= //
// Напиши функцію `findLongestWord(string)`, яка приймає параметром довільний рядок
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому
// рядку.
// const findLongestWord = function (string) {
//     const stringArray = string.split(" ");
//     let theLongestWord = "";
//     for (let word of stringArray) {
//         if (word.length >= theLongestWord.length) {
//             theLongestWord = word;
//             continue;
//         }  
//     }
//     return theLongestWord;
// };
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'
// ========================================================================= //
// Напиши функцію `formatString(string)` яка приймає рядок і форматує його якщо
// необхідно.

// - Якщо довжина рядка не перевищує `40 символів`, функція повертає її в
//   початковому   вигляді.
// - Якщо довжина більше `40 символів`, то функція обрізає рядок до 40-ка символів
//   і додає в кінець рядка три крапки `'...'`, після чого повертає   укорочену
//   версію.

// const formatString = function (string) {
//     const stringArrayLength = string.split(" ").join(" ").length;
//     if (stringArrayLength <= 40) {
//         return string;
//     }
//     if (stringArrayLength > 40) {
//         return string.slice(0, 39) + '...';
//     }
// };
/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // повернеться оригінальний рядок
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // повернеться форматований рядок
// console.log(formatString('Curabitur ligula sapien.'));
// // повернеться оригінальний рядок
// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );// повернеться форматований рядок
// ========================================================================= //
// Напиши функцію `checkForSpam(message)`, приймаючу 1 параметр `message` - рядок.
// Функція перевіряє її на вміст слів `spam` і `sale`. Якщо знайшли заборонене
// слово, то функція повертає `true`, якщо заборонених слів немає функція повертає
// `false`. Слова в рядку можуть бути в довільному регістрі.
// const checkForSpam = function (message) {
//     const messageToLower = message.toLowerCase();
//     if (messageToLower.includes('spam') || messageToLower.includes('sale')) {
//         return true;
//     }
//     return false;
//   // твій код
// };
// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
// ========================================================================= //
// Напиши скрипт з наступним функціоналом:

// - При завантаженні сторінки користувачеві пропонується в `prompt` ввести число.
//   Введення зберігається в змінну `input` і додається в масив чисел `numbers`.
// - Операція введення числа користувачем і збереження в масив триває до тих пор,
//   пір, поки користувач не натисне `Cancel` в `prompt`.
// - Після того як користувач припинив введення натиснувши `Cancel`, якщо масив не
//   порожній, необхідно порахувати суму всіх елементів масиву і записати її в
//   змінну `total`. Використовуй цикл `for` або `for...of`. Після чого в консоль
//   виведи рядок `'Загальна сума чисел дорівнює [сума]'`.

// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір
// символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй
// `alert` з текстом `'Було введено не число, попробуйте ще раз'`, при цьому
// результат `prompt` записувати в масив чисел не потрібно, після чого знову
// користувачеві пропонується ввести число в `prompt`.

// let input;

// let total = 0;

// do {
//   input = Number(prompt('Введите число'));
//   if (Number.isNaN(input)) {
//     alert('Було введено не число, попробуйте ще раз')
//   } else {
//     numbers.push(input);
//   }
// } while (input !== null);

// console.log(numbers);

// for (let i = 0; i < numbers.length; i += 1) {
//   total += +numbers[i];
// }
// console.log(`Загальна сума чисел дорівнює ${total}`);

// const numbers = [];
// let inputValue = prompt('Введите число');
// let chech = false;
// let total = 0;

// do {
//   if (inputValue) {
//     chech = true;
//     total += Number(inputValue);
//     numbers.push(inputValue)
//     inputValue = prompt("Введите число");
//   } else {
//     chech = false;
//     alert(`Общая сумма чисел равна ${total}`);
//   }
// } while (chech); // перевіряє чи chech = false;
// ========================================================================= //
// Є масив `logins` з логінами користувачів. Напиши скрипт додавання логіна в масив
// `logins`. Логін, який додається повинен:

// - проходити перевірку на довжину від 4 до 16-ти символів включно // done
// - бути унікальним, тобто бути відсутнім в масиві `logins`

// Розбий завдання на підзадачі за допомогою функцій.

// Напиши функцію `isLoginValid(login)`, в якій перевір кількість символів
// параметра `login` і поверни `true` або `false` в залежності від того, чи
// потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів
// включно. // done

// Напиши функцію `isLoginUnique(allLogins, login)`, яка приймає список всіх
// логінів і логін, який додається, як параметри і перевіряє наявність `login` в
// массиве `allLogins`, повертає `true` якщо такого логіна ще немає і `false` якщо
// логін вже використовується. // done

// Напиши функцію `addLogin(allLogins, login)` яка:

// - Приймає новий логін і масив всіх логінів як параметри
// - Перевіряє валідність логіна використовуючи допоміжну функцію `isLoginValid`
// - Якщо логін не валідний, припинити виконання функції `addLogin` і повернути
//   радок `'Помилка! Логін повинен бути від 4 до 16 символів'`
// - Якщо логін валідний, функція `addLogin` перевіряє унікальність логіна за
//   допомогою функції `isLoginUnique`
// - Якщо `isLoginUnique` поверне `false`, тоді `addLogin` Не додає логін в массив
//   масив і повертає рядок `'Такий логін уже використовується!'`
// - Якщо `isLoginUnique` поверне `true`, `addLogin` додає новий логін в `logins` і
//   повертає рядок `'Логін успішно доданий!'`

// 🔔 **Принцип єдиної відповідальності функції** - кожна функція робить щось одне.
// Це дозволяє перевикористати код і змінювати логіку роботи функції тільки в
// одному місці, не зачіпаючи роботу програми в цілому.

// Предикатні функції повертають тільки `true` або `false`. Такі функції прийнято
// називати починаючи з `is`: `isLoginUnique` і `isLoginValid` в нашому випадку.

// - `isLoginUnique` тільки перевіряє чи є такий логін в масиві і повертає `true`
//   або `false`.
// - `isLoginValid` тільки перевіряє чи валідний логін і повертає `true` або
//   `false`.
// - `addLogin` додають чи не додають логін в масив. При цьому для перевірок   
//   умови додавання використовує результати викликів інших функцій -
//   `isLoginUnique` і `isLoginValid`.

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// const isLoginValid = function (login) {
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   }
//     return false;
// };

// const isLoginUnique = function (allLogins, login) {
//     if (allLogins.includes(login)) {
//         return false;
//     }
//   return true;
// };

// const addLogin = function (allLogins, login) {
//   if (!isLoginValid) {
//     return 'Помилка! Логін повинен бути від 4 до 16 символів';
//   }
//   if (isLoginUnique) {
//     allLogins.push(login)
//     return 'Логін успішно доданий!';
//   }
//   return 'Такий логін уже використовується!';
// };
// // /*
// //  * Виклич функції для перевірки працездатності твоєї реалізації.
// //  */
// console.log(isLoginUnique(logins, 'Ajax'));
// console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// ========================================================================= //Об'єкти
// Расставь отсутствующие `this` в методах объекта `account`.

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };
// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
// ========================================================================= //
// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);
//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);
//     this.items = this.items.filter(item => item !== itemName);
//   },
// };
// const invokeInventoryAction = function(itemName) {
//   console.log(`Invoking action on ${itemName}`);
// };
// invokeInventoryAction('Medkit', inventory.add('Medkit'));
// // Invoking action on Medkit
// // Adding Medkit to inventory
// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
// invokeInventoryAction('Gas mask', inventory.remove('Gas mask'));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory
// console.log(inventory.items); // ['Knife', 'Medkit']
// ========================================================================= //
// Колбек функції
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (let pizza of pizzaPalace.pizzas) {
//       if (pizza === pizzaName) {
//         return onSuccess(pizzaName);
//       } 
       
      
//     };
//      return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   }
// }
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);
// ========================================================================= //
// Task 1
// Добавить метод getinfo в объект user, который будет возвращать инфу о пользователе в формате
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//   position: 'spider-man',
//   getinfo() {
//     return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`
//    } 
// }
// console.log(user.getinfo())
// ========================================================================= //
// Task 2
// Нужно написать функцию которая принимает 2 параметр key, которая будет перебирать объект
// если у объекта есть такой ключ - вернет true
// Есть 2 варианта решения, сначала напишем функцию, потом решим простым способом

const obj = {
    name: 'Igor',
    car:  'Mercedes',
    carColor: 'black'
}
// const fn = function (key, obj) {
//   for (let item in obj) {
//     if (item === key) {
//       return true;
//    }
//   }
//   return false;
// }

// function fn(key, obj) {
//   return key in obj;
// }

// function fn(key, obj) {
//   return obj.hasOwnProperty(key);
// }
// ========================================================================= //
// Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

// function findBestEmployee(obj) {
//   let biggestInd = 0;
//   const array = Object.values(obj);
//   for (let ind of array) {
//     if (ind > biggestInd) {
//       biggestInd = ind;
//     }
//   }
//   return biggestInd;
// }
 
// function findBestEmployee(obj) {
//   let biggestInd = 0;
//   let name = '';
  
//   for (let ind in obj) {
//     if (obj[ind] > biggestInd) {
//       biggestInd = obj[ind];
//       name = ind;
//     }
//   }
//   return name;
//  }
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// ========================================================================= //
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   const array = Object.values(employees);
//   let totalSalary = 0;
//   for (let salary of array) {
//     totalSalary += salary;
//   }
//   return totalSalary;
//   // твой код
// };


// const countTotalSalary = (employees) => Object.values(employees).reduce((acc, el) => acc + el, 0);

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400
// ========================================================================= //

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let values = [];
//   for (let obj of arr) {
//     if (obj.hasOwnProperty(prop)) {
//         values.push(obj[prop]);
//     }
//   }
//   return values;
//   // твой код
// };


// const getAllPropValues = (arr, prop) => arr.reduce((acc, el) => (el.hasOwnProperty(prop) ? [...acc, el[prop]] : acc),[]);

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
// ========================================================================= //
// Напиши функцию calculateTotalPrice(allProdcuts, productName), 
// которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800
// ========================================================================= //
// / Дано: массив, содержащий хеши имен
// Возврат: строка, отформатированная как список имен, разделенных запятыми,
// за исключением последних двух имен, которые должны быть разделены амперсандом.

// function list(array) {
//   const newArray = [];
//   for (let { name } of array) {
//     newArray.push(name);

//   }
//   let firstString = newArray.splice(0, newArray.length - 2).join(", ")
//   let secondString = newArray.splice(-2).join(' & ');
//   return firstString ? `${firstString}, ${secondString}`: secondString;
//     // пиши тут свой код
// }
// function list(arr) {
//   return arr
//     .map((el) => el.name)
//     .join(", ")
//     .replace(/,(?=[^,]*$)/, " &");
// }
// function list(arr) {
//   return arr.reduce(
//     (acc, { name }, ind, arr) =>
//       ind > 0 && ind !== arr.length - 1
//         ? acc + ", " + name
//         : ind > 0 && ind === arr.length - 1
//         ? acc + " & " + name
//         : acc + name,
//     ""
//   );
// }
// ТЕСТЫ

// console.log(
//   list([
//     { name: "Bart" },
//     { name: "Lisa" },
//     { name: "Maggie" },
//     { name: "Petya" },
//   ])
// ); // returns 'Bart, Lisa, Maggie & Petya'
// console.log(list([{ name: "Bart" }, { name: "Lisa" }])); // returns 'Bart & Lisa'
// console.log(list([{ name: "Bart" }])); // returns 'Bart'
// console.log(list([])); // '
// ========================================================================= //
/*Напиши скрипт управления личным кабинетом интернет банка. 
Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],
// id: 0,
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  // createTransaction(amount, type) {
  //   this.id += 1;
  //   return { amount, type, id: this.id };
  // },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  // deposit(amount) {
  //   this.balance += amount;
  //   const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
  //   this.transactions.push(transaction);
  // },

  //  * Метод отвечающий за снятие суммы с баланса.
  //  * Принимает сумму танзакции.
  //  * Вызывает createTransaction для создания объекта транзакции
  //  * после чего добавляет его в историю транзакций.
  //  *
  //  * Если amount больше чем текущий баланс, выводи сообщение
  //  * о том, что снятие такой суммы не возможно, недостаточно средств.
  //  */
  // withdraw(amount) {
  //   if (this.balance >= amount ) {
  //   this.balance -= amount;
  //   const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
  //   this.transactions.push(transaction);
  // };
  // return "снятие такой суммы не возможно, недостаточно средств";
  // },
  //  * Метод возвращает текущий баланс
  
  // getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  // getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
//   getTransactionTotal(type) {},
// };


// ========================================================================= //
// TASK 1

// Вам будет дан массив целых чисел. Ваша задача - взять этот массив и найти индекс N,
// где сумма целых чисел слева от N равна сумме целых чисел справа от N.
// Если нет индекса, который мог бы сделать это, верните - 1.

// Например:

// Допустим, вам дан массив {1,2,3,4,3,2,1}:
// Ваша функция вернет индекс 3, потому что в 3-й позиции массива сумма левой части
// индекса ({1,2,3}) и сумма правой части индекса ({3,2, 1}) оба равны 6.

// Посмотрим еще на один.
// Вам дан массив {1,100,50, -51,1,1}:
// Ваша функция вернет индекс 1, потому что в 1-й позиции массива сумма левой части
// индекса ({1}) и сумма правой части индекса ({50, -51,1,1 }) оба равны 1.

// Последний:
// Вам дан массив {20,10, -80,10,10,15,35}
// В индексе 0 левая сторона {}
// Правая сторона: {10, -80,10,10,15,35}
// При добавлении они оба равны 0. (Пустые массивы в этой задаче равны 0)
// function findEvenIndex(arr) {
// пиши код тут
// }

// ТЕСТЫ

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0

// const arr = [1, 2, 3, 4, 5, 6];

// const res = arr.push(10);
// console.log(res); // повертаэ довжину масиву
// ========================================================================= //
// Task 5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function callback(number) {
//     totalPrice += number;
//   })
  


//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
// ========================================================================= //
// Task 6
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

// numbers.forEach(function callback(number) {
//   if (number > value) {
//     filteredNumbers.push(number);
//     }
//   })

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// ========================================================================= //
// Task 7
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины
// в параметры firstArray и secondArray, и возвращает новый массив их общих элементов,
// то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function callback(number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//   }
// })


//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

// Change code below this line
// const filterArray =(numbers, value)=>{
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// ========================================================================= // Метод Reduce
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// # Спочатку метод reduce() створює внутрішню змінну-акумулятор і
// # присвоює їй значення параметра initialValue або першого елемента
// # масиву, що перебирається, якщо initialValue не задане.
// previousValue = 0

// # Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
// # параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
// Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// Результат - 32

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((severalTime, player) => {
//   severalTime += player.playtime / gamesPlayed;
//   return severalTime
// }, 0);
// const calculateTotalBalance = users => {
//   const balanceValue = users.map(user=>user.balance);
//   return balanceValue.reduce((total, value )=> total=+value,0)
// };
// console.log(calculateTotalBalance(users))
// ========================================================================= // метод sort()
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort();
// console.log(authorsInAlphabetOrder)
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder)

// Сортування об'єктів
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// ========================================================================= //
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по 
// имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort(( firstBook, secondBook ) => firstBook.author.localeCompare(secondBook.author))
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort((firstBookRating, secondBookRatting) => firstBookRating.rating - secondBookRatting.rating);
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((firstBookRating, secondBookRatting) => secondBookRatting.rating - firstBookRating.rating);
// console.log(sortedByDescentingRating);
// ========================================================================= //
// Задача 42. Сортировка по балансу
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный 
// по возрастанию их баланса(свойство balance).
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const sortByAscendingBalance = users => {
//   return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance)
   
// };
// console.log(sortByAscendingBalance(users))

// Дополни функцию sortByDescendingFriendCount(users) так,
//   чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей(свойство friends).
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length)
   
// };
// console.log(sortByDescendingFriendCount(users))
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный
//  по их имени(свойство name) в алфавитном порядке.
// const sortByName = users => {
//   return [...users].sort((firstUser, secondUser)=>firstUser.name.localeCompare(secondUser.name))
// };
// console.log(sortByName(users))
// ========================================================================= //Ланцюг застосування методів 45
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
//   рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

//   const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line
// const names = [...books].filter(book => book.rating >=  MIN_BOOK_RATING).map(book => book.author).sort();
// console.log(names);
// ========================================================================= //46
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала 
// массив имён пользователей отсортированный по возрастанию количества их друзей(свойство friends).
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((firstUser, secondUser)=> firstUser.friends.length - secondUser.friends.length).map(user => user.name)
   
// };
// console.log(getNamesSortedByFriendCount(users))
// ========================================================================= //47
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей(свойство friends) 
// отсортированный по алфавиту.
// const getSortedFriends = users => {
//   return [...users].flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index).sort();
   
// };
// console.log(getSortedFriends(users))
// ========================================================================= //48
// Дополни функцию getTotalBalanceByGender(users, gender) так,
// чтобы она возвращала общий баланс пользователей(свойство balance),
// пол которых(свойство gender) совпадает со значением параметра gender.
// const getTotalBalanceByGender = (users, gender) => {
//    return [...users].filter( user => user.gender === gender ).reduce((totalBalance, user) => totalBalance+user.balance, 0)
// };
// console.log(getTotalBalanceByGender(users, "male"))
// console.log(getTotalBalanceByGender (users, "female"))
// ========================================================================= //Модуль 5
// class StringBuilder {
// constructor (initialValue){
//     this.value = initialValue;
//   }
  
// getValue() {
//     return this.value;
//   }
  
// padEnd(str){
//     this.value = this.value + str;
//   }
  
// padStart(str){
//     this.value = str + this.value;
//   }
  
//  padBoth(str){
//  this.value=str + this.value + str;} 
// }
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// ========================================================================= //19
// Добавь классу Admin метод constructor, который принимает один параметр -
// объект настроек с двумя свойствами email и accessLevel.Добавь классу Admin публичное свойство accessLevel,
// значение которого будет передаваться при вызове конструктора.
// Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением класса
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor ({email, accessLevel}) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
// ========================================================================= //20
// Добавь классу Admin следующие свойства и методы.
// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. 
// Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. 
// Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке.
// Метод должен проверять наличие значения параметра email в массиве хранящемся 
// в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
// в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

class User {
  email;
  constructor(email) {
    this.email = email;
  }
  get email() {
    return this.email;
  }
  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line
  blacklistedEmails = [];
  blacklist(email) {
    this.blacklistedEmails.push(email);
}
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
}

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true