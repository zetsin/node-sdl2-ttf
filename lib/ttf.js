'use strict'

const SDL_ttf = require('../dep/SDL_ttf')

const utils = require('./utils')

const ref = require('ref')

const style_set = {
	'normal': 0,
	'bold': 1,
	'italic:': 2,
	'underline': 4,
	'strikethrough': 8,
}
const style_get = {}
Object.keys(style_set).forEach((value) => { style_get[style_set[value]] = value })

const hinting_set = {
	'normal': 0,
	'light': 1,
	'mono:': 2,
	'none': 3,
}
const hinting_get = {}
Object.keys(hinting_set).forEach((value) => { hinting_get[hinting_set[value]] = value })

class font {
	constructor(file = '', psize = 72, index = 0) {
		this._font = SDL_ttf.TTF_OpenFontIndex(file.toString(), +psize, +index)

		this.file = file
		this.fontface = new fontface(this)
	}
	close() {
		SDL_ttf.TTF_CloseFont(this._font)
	}
	test(ch = '') {
		ch = ch.toString()[0]
		return this._font.length && SDL_ttf.TTF_GlyphIsProvided(this._font, ch)
	}
	metrics(ch = '') {
		ch = ch.toString()[0]
		let minx = ref.alloc('int')
		let maxx = ref.alloc('int')
		let miny = ref.alloc('int')
		let maxy = ref.alloc('int')
		let advance = ref.alloc('int')
		this._font.length && SDL_ttf.TTF_GlyphMetrics(this._font, ch, minx, maxx, miny, maxy, advance)
		return ({
			x: {
				min: minx.deref(),
				max: maxx.deref()
			},
			y: {
				min: miny.deref(),
				max: maxy.deref()
			},
			advance: advance.deref()
		})
	}
	getSize(text = '') {
		text = text.toString()
		let w = ref.alloc('int')
		let h = ref.alloc('int')
		this._font.length && SDL_ttf.TTF_SizeUTF8(this._font, text, w, h)
		return utils.arraylike({
			w: w.deref(),
			h: h.deref()
		})
	}
	solid(text = '', rgba = 0) {
		text = text.toString()
		rgba = utils.parseRGBA(rgba)

		let _surface = this._font.length ? SDL_ttf.TTF_RenderUTF8_Solid(this._font, text, SDL_ttf.SDL_Color(rgba)) : null

		return new fontwrap(_surface, text, rgba)
	}
	shade(text = '', rgba = 0, rgbaBG = 0) {
		text = text.toString()
		rgba = utils.parseRGBA(rgba)
		rgbaBG = utils.parseRGBA(rgbaBG)

		let _surface = this._font.length ? SDL_ttf.TTF_RenderUTF8_Shaded(this._font, text, SDL_ttf.SDL_Color(rgba), SDL_ttf.SDL_Color(rgbaBG)) : null

		return new fontwrap(_surface, text, rgba, rgbaBG)
	}
	blend(text = '', rgba = 0) {
		text = text.toString()
		rgba = utils.parseRGBA(rgba)

		let _surface = this._font.length ? SDL_ttf.TTF_RenderUTF8_Blended(this._font, text, SDL_ttf.SDL_Color(rgba)) : null

		return new fontwrap(_surface, text, rgba)
	}

	get style() {
		let _style = this._font.length ? SDL_ttf.TTF_GetFontStyle(this._font) : 0
		return style_get[_style]
	}
	set style(_style = 0) {
		_style = style_set[_style] || 0
		this._font.length && SDL_ttf.TTF_SetFontStyle(this._font, _style)
	}
	get outline() {
		return this._font.length ? SDL_ttf.TTF_GetFontOutline(this._font) : 0
	}
	set outline(_outline = 0) {
		this._font.length && SDL_ttf.TTF_SetFontOutline(this._font, +_outline)
	}
	get hinting() {
		let _hinting = this._font.length ? SDL_ttf.TTF_GetFontHinting(this._font) : 0
		return hinting_get[_hinting]
	}
	set hinting(_hinting = 0) {
		_hinting = hinting_set[_hinting] || 0
		this._font.length && SDL_ttf.TTF_SetFontHinting(thi._font, _hinting)
	}
	get kerning() {
		return this._font.length ? SDL_ttf.TTF_GetFontKerning(this._font) : 0
	}
	set kerning(_kerning = 0) {
		this._font.length && SDL_ttf.TTF_SetFontKerning(this._font, +_kerning)
	}
	get height() {
		return this._font.length ? SDL_ttf.TTF_FontHeight(this._font) : 0
	}
	get ascent() {
		return this._font.length ? SDL_ttf.TTF_FontAscent(this._font) : 0
	}
	get descent() {
		return this._font.length ? SDL_ttf.TTF_FontDescent(this._font) : 0
	}
	get lineSkip() {
		return this._font.length ? SDL_ttf.TTF_FontLineSkip(this._font) : 0
	}


	static init() {
		SDL_ttf.TTF_Init()
	}
	static wasInit() {
		SDL_ttf.TTF_WasInit()
	}
	static quit() {
		SDL_ttf.TTF_Quit()
	}
}

class fontface {
	constructor(font) {
		this.font = font
	}

	get number() {
		return this.font._font.length ? SDL_ttf.TTF_FontFaces(this.font._font) : 0
	}
	get fixed() {
		return this.font._font.length && SDL_ttf.TTF_FontFaceIsFixedWidth(this.font._font)
	}
	get family() {
		return this.font._font.length ? SDL_ttf.TTF_FontFaceFamilyName(this.font._font) : ''
	}
	get style() {
		return this.font._font.length ? SDL_ttf.TTF_FontFaceStyleName(this.font._font) : ''
	}
}

class fontwrap {
	constructor(_surface, text = '', rgba = 0, rgbaBG = 0) {
		this.text = text
		this.rgba = rgba
		this.rgbaBG = rgbaBG

		this._surface = _surface
	}
	texture(_render) {
		this._texture = this._texture || _render.createTextureFromSurface(this._surface)
		this._texture.alphaMod = this.rgba.a
		return this._texture
	}
}


font.init()

module.exports = font