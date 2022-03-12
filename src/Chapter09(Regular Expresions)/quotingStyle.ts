"use strict";

// Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.

// Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.

// //Представьте, что вы написали рассказ и использовали одинарные кавычки
// для обозначения прямой речи. Теперь вы хотите заменить все кавычки
// в диалогах двойными кавычками, сохраняя при этом одинарные кавычки,
// примененные в качестве апострофов, как в слове Д'Артаньян.
// Подумайте, как сделать шаблон, который бы различал эти два вида использования кавычек, и создайте вызов метода replace, который бы выполнял
// правильную замену.

let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/A/g, "B"));
// → "I'm the cook," he said, "it's my job."
