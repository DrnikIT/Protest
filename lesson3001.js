// // Задание №3:
// // Написать свою реализацию встроенной функции массивов filter. Назвать функцию myFilter и сделать так, чтобы любой массив мог использовать данную функцию как "родную". В качестве параметров он должен принимать callback-функцию и как необязательный параметр объект, который станет на место this для этой функции. В общем работать должен точно также как и filter. Внутренняя функция должна вызываться с теми же параметрами, что и оригинал (элемент, индекс, массив).
// //  Функция myFilter должна вызываться как метод массива, а не как глобальная функция.
// // Имеется ввиду, что нужно добавить функцию в встроенный прототип.
// // Пример использования:

// function isBigEnough(value) {
//     return value > 4;
// }
// const testArray = [null]// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(testArray.myFilter(isBigEnough)) // віведет: [5,6,7,8,9]

// Array.prototype.myFilter = function (testArray, value) {
//   if (value == null) {
//     throw new Error("Cant iterate over undefined or null");
//   }
//   if (typeof testArray !== "function") {
//     throw new Error("Callback is not a function");
//   }
//   let context = value;

//   const ObjectFromArray = Object(value);

//   if (arguments.length > 1) {
//     context = this.value;
//   }

//   const res = [];

//   for (let i = 0; i < ObjectFromArray.length; i++) {
//     if (i in ObjectFromArray) {
//       if (testArray.call(context, context[i], i, ObjectFromArray)) {
//         res.push(context[i]);
//       }
//     }
//   }

//   return res;
// };
const testArray = [10, 2, 30, 4, 5, 6, 70, 8, 9, 0];
for (let key in testArray) {
  if (testArray[key] > 8) {
    console.log(`testArray[${key}]: `, testArray[key]);
  }
}
