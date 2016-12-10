var fs = require('fs')
var test = require('tape')
var createConfig = require('../index')

test('init', function (t) {
  var conf = createConfig({ filename: 'confstoretest' })
  fs.readFile(conf.filepath, function (err, data) {
    t.notOk(err)
    t.ok(data)
    conf.destroy()
    t.end()
  })
})

test('read & write', function (t) {
  var conf = createConfig({ filename: 'confstoretest' })
  conf.write({ hi: 'hey' })
  var data = conf.read()
  t.ok(data)
  t.ok(data.hi)
  conf.destroy()
  t.end()
})

test('get', function (t) {
  var conf = createConfig({ filename: 'confstoretest' })
  conf.write({ hi: 'hey' })
  var val = conf.get('hi')
  t.equal(val, 'hey')
  conf.destroy()
  t.end()
})

test('set', function (t) {
  var conf = createConfig({ filename: 'confstoretest' })
  conf.set('hi', 'hey')
  var val = conf.get('hi')
  t.equal(val, 'hey')
  conf.destroy()
  t.end()
})

test('has', function (t) {
  var conf = createConfig({ filename: 'confstoretest' })
  conf.set('hi', 'hey')
  var exists = conf.has('hi')
  t.equal(exists, true)
  conf.destroy()
  t.end()
})

test('delete', function (t) {
  var conf = createConfig({ filename: 'confstoretest' })
  conf.set('hi', 'hey')
  var exists = conf.has('hi')
  t.equal(exists, true)
  conf.delete('hi')
  exists = conf.has('hi')
  t.equal(exists, false)
  conf.destroy()
  t.end()
})
