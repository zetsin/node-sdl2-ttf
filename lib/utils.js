'use strict'

exports.arraylike = (obj = {}) => {
	Object.keys(obj).forEach((value, index) => {
		obj[index] = obj[value]
	})
	return obj
}

exports.arraylike2obj = (obj = {}, keys = '') => {
	keys = keys.split(',')
	var ret = {}
	keys.forEach((value, index) => {
		value = value.trim()
		ret[value] = (value in obj) ? obj[value] : (obj[index] || 0)
	})
	return ret
}

exports.parseRGBA = (rgba = 0) => {

	let rgb, a
	if(Array.isArray(rgba)) {
		rgb = rgba[0]
		a = rgba[1]
	} 
	else if(Number.isInteger(rgba)) {
		rgb = rgba
		a = 0xFF
	}
	else if(rgba.rgb || rgba.a) {
		rgb = rgba.rgb
		a = rgba.a
	}
	else {
		return rgba
	}

	rgb = rgb >= 0 ? rgb : 0
	a = a >= 0 ? a : 0xFF

	return exports.arraylike({
		r: (rgb >> 16) & 0xFF,
		g: (rgb >> 8) & 0xFF,
		b: rgb & 0xFF,
		a: a
	})
}