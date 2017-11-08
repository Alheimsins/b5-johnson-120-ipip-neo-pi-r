const test = require('ava')
const pkg = require('../package.json')
const dependencies = pkg.dependencies || {}
const devDependencies = pkg.devDependencies || {}
const {getInfo, getItems} = require('../')

test('basic check', t => {
  t.true(true, 'ava works ok')
})

Object.keys(dependencies).forEach(dependency =>
  test(`${dependency} loads ok`, t => t.truthy(require(dependency)))
)

Object.keys(devDependencies).forEach(dependency =>
  test(`${dependency} loads ok`, t => t.truthy(require(dependency)))
)

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
