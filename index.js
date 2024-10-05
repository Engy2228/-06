const userText = prompt('Введите текст').trim()
console.log(userText)

const wordFromText = prompt(`Введите слово из текста ${userText}`).trim()
console.log(wordFromText)

const indexOfWord = userText.indexOf(wordFromText)
console.log(indexOfWord)

const string = userText.slice(0, indexOfWord)



alert(`Результат: ${string}`)