# configuration-store

Store configuration for cli tools!

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/configuration-store.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/configuration-store
[travis-image]: https://img.shields.io/travis/sethvincent/configuration-store.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/configuration-store
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## Install

```sh
npm install --save configuration-store
```

## Usage

```js
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
```

## Documentation
- [Tests](tests/)

### Examples
- [Basic example](example.js)

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Conduct

It's important that this project contributes to a friendly, safe, and welcoming environment for all, particularly for folks that are historically underrepresented in technology. Read this project's [code of conduct](CONDUCT.md)

## Change log

Read about the changes to this project in [CHANGELOG.md](CHANGELOG.md). The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Contact

- **chat** – You can chat about this project at [http://gitter.im/sethvincent/ask](http://gitter.im/sethvincent/ask)
- **issues** – Please open issues in the [issues queue](https://github.com/sethvincent/configuration-store/issues)
- **twitter** – [@sethdvincent](https://twitter.com/sethdvincent)
- **email** – Need in-depth support via paid contract? Send an email to sethvincent@gmail.com

## License

[ISC](LICENSE.md)
