'use strict'

let ttf = {
	require(name) {
		return require('./dep/' + name)
	},
	class(name) {
		return require('./lib/' + name)
	}
}

module.exports = ttf