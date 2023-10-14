/*
13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

let text = 'Довгий текст з багатьма голосними буквами'
let regSymbols = /[АЕЄИІЇОУЮЯаеєиіїоуюя]/g
let textWithoutVowels = text.replace(regSymbols, "")
console.log(textWithoutVowels)