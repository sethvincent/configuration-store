var assert = require('assert')
var path = require('path')
var fs = require('fs')

var homedir = require('os-homedir')
var kp = require('obj-keypath')

module.exports = function configurationStore (options) {
  assert.equal(typeof options, 'object', 'options object is required')
  assert.equal(typeof options.filename, 'string', 'options.filename string is required')

  var config = {}
  config.filename = options.filename
  config.filepath = options.filepath || path.join(homedir(), config.filename)

  config.get = function (key) {
    var data = config.read()
    if (!key) return data
    return kp.get(data, key)
  }

  config.set = function (key, value) {
    var data = config.read()
    data = kp.set(data, key, value)
    config.write(data)
    return data
  }

  config.has = function (key) {
    return !!config.get(key)
  }

  config.delete = function (key) {
    var data = config.read()
    data = kp.delete(data, key)
    config.write(data)
    return data
  }

  config.clear = function () {
    return config.write({})
  }

  config.read = function () {
    var file

    try {
      file = fs.readFileSync(config.filepath, 'utf8')
    } catch (err) {
      return false
    }

    if (!file || file instanceof Error) return false
    return JSON.parse(file)
  }

  config.write = function (data) {
    var file = JSON.stringify(data, true, 2)
    try {
      fs.writeFileSync(config.filepath, file)
    } catch (err) {
      console.log(err)
    }
    return data
  }

  config.destroy = function () {
    fs.unlinkSync(config.filepath)
  }

  if (!config.read()) config.clear()
  return config
}
