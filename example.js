var createConfig = require('./index')

/* create a config file */
var conf = createConfig({
  filename: 'confstoretest'
})

/* get empty object */
var data = conf.get()
console.log('empty object:', data)

/* set a value */
data = conf.set('hi', 'how are you')
console.log('value of hi:', conf.get('hi')) // how are you

/* set an object as value */
data = conf.set('obj', { ok: 'this is cool', right: 'yeah!' })
console.log('value of obj:', conf.get('obj')) // { ok: 'this is cool', right: 'yeah!' }

/* delete a property using keypath dot notation */
data = conf.delete('obj.right')
console.log('value of obj after delete', conf.get('obj')) // { ok: 'this is cool' }

/* check if a property exists */
var exists = conf.has('obj.right')
console.log('does obj.right exist?', exists) // false

/* clear all data from conf */
data = conf.clear()
console.log('empty object again:', data) // {}

/* remove configuration file completely! */
conf.destroy()
