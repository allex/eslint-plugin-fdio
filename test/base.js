const config = require('../')
const test = require('tape')

const isObject = obj => typeof obj === 'object' && obj !== null

test('test basic properties of config', (t) => {
  t.ok(isObject(config.rules))
  t.end()
})
