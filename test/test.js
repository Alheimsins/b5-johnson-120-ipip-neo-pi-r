const test = require('ava')
const { dependencies, devDependencies } = require('../package.json')
const { getInfo, getItems } = require('../')
const dropModules = ['husky']
const isDropped = module => !dropModules.includes(module)

test('basic check', t => {
  t.true(true, 'ava works ok')
})

if (dependencies) {
  Object.keys(dependencies)
    .filter(isDropped)
    .forEach(dependency =>
      test(`${dependency} loads ok`, t => t.truthy(require(dependency)))
    )
}

if (devDependencies) {
  Object.keys(devDependencies)
    .filter(isDropped)
    .forEach(dependency =>
      test(`${dependency} loads ok`, t => t.truthy(require(dependency)))
    )
}

test('basic inventory tests', t => {
  t.truthy(getInfo(), 'info ok')
  t.truthy(getItems(), 'items ok')
  t.truthy(getItems('no'), 'items with lang ok')
})

test('it throws error for lang xx', t => {
  const expectedErrorMessage = 'Inventory not found. Try another language input.'
  try {
    getItems('xx')
  } catch (e) {
    t.is(e.message, expectedErrorMessage)
  }
})

test('validation of question ids across languages', t => {
  const languages = getInfo().languages.map(({ id }) => id)
  if (languages.length <= 1) t.pass()
  const questions = languages.map(getItems)
  const ids = questions.map(qs => qs.map(q => q.id))
  ids.reduce((previous, current) => {
    if (previous !== false) {
      t.deepEqual(previous, current, 'ids match')
    }
    return current
  }, false)
})

test('it returns sorted inventory items', t =>
  t.truthy(getItems('en', false), 'sorted items ok')
)

test('it returns random inventory items', t =>
  t.truthy(getItems('en', true), 'random items ok')
)

test('random inventory items', t => {
  const sortedItems = getItems('en', false)
  const randomItems = getItems('en', true)

  t.notDeepEqual(sortedItems[0], randomItems[0], 'shuffeled ok')

  t.is(sortedItems.length, randomItems.length, 'array sizes ok')

  randomItems.map(randomItem =>
    t.deepEqual(sortedItems.find(sortedItem => randomItem.id === sortedItem.id), randomItem)
  )
})

test('test all languages', t => {
  const { languages } = getInfo()
  languages.map(({ id }) => t.truthy(getItems(id, false), `${id} items ok`))
})
