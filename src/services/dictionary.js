const { oldNorseToEnglish, englishToOldNorse } = require('old-norse-ordbok')

const getAll = async () => {
  const words = []

  const oldNorse = await oldNorseToEnglish()
  const english = await englishToOldNorse()

  oldNorse.forEach((word) => words.push(formatWord(word, 'oldNorse')))
  english.forEach((word) => words.push(formatWord(word, 'english')))

  return words
}

/**
 * Prepare words for collection.
 */
const formatWord = (word, lang) => ({
  ...word,
  startsWith: word.word.charAt(0).toLowerCase(),
  lang,
})

module.exports = {
  getAll,
}
