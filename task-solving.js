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


