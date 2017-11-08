const { knuthShuffle } = require('knuth-shuffle')
const fs = require('fs')
const { resolve } = require('path')
const dirsInFolder = p => fs.readdirSync(resolve(p)).filter(f => fs.statSync(p + '/' + f).isDirectory())

module.exports.getItems = (lang = 'en', shuffle = false) => {
  let choices, questions
  try {
    questions = require(`./data/${lang}/questions.json`)
    choices = require(`./data/${lang}/choices`)
  } catch (e) {
    throw new Error('Inventory not found. Try another language input.')
  }

  const inventory = shuffle ? knuthShuffle(questions) : questions
  return inventory.map((question, i) => Object.assign(question, {choices: choices[question.keyed], num: ++i}))
}

module.exports.getInfo = () => (
  {
    name: `Johnson's IPIP NEO-PI-R`,
    id: 'johnson-120-ipip-neo-pi-r',
    shortId: 'b5-120',
    time: 20,
    questions: 120,
    note: 'Recommended',
    languages: dirsInFolder('data/')
  }
)
