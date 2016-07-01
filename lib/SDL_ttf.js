var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var uchar = exports.uchar = ref.types.uchar
var Uint8 = exports.Uint8 = uchar
var SDL_version = exports.SDL_version = Struct({
	major: Uint8,
	minor: Uint8,
	patch: Uint8,
})
var SDL_version_ptr = exports.SDL_version_ptr = ref.refType(SDL_version)
var int32 = exports.int32 = ref.types.int32
var _TTF_Font = exports._TTF_Font = Struct({
})
var TTF_Font = exports.TTF_Font = _TTF_Font
var TTF_Font_ptr = exports.TTF_Font_ptr = ref.refType(TTF_Font)
var string = exports.string = ref.types.CString
var long = exports.long = ref.types.long
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var uint32 = exports.uint32 = ref.types.uint32
var Uint32 = exports.Uint32 = uint32
var Uint8_ptr = exports.Uint8_ptr = ref.refType(Uint8)
var c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_3922 = exports.c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_3922 = Struct({
	base: Uint8_ptr,
	here: Uint8_ptr,
	stop: Uint8_ptr,
})
var c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_4037 = exports.c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_4037 = Struct({
	data1: voit_ptr,
	data2: voit_ptr,
})
var c__S_SDL_RWops_U_SDL_rwops_h_3164 = exports.c__S_SDL_RWops_U_SDL_rwops_h_3164 = Union({
	mem: c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_3922,
	unknown: c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_4037,
})
var SDL_RWops = exports.SDL_RWops = Struct({
	size: voit_ptr,
	seek: voit_ptr,
	read: voit_ptr,
	write: voit_ptr,
	close: voit_ptr,
	type: Uint32,
	hidden: c__S_SDL_RWops_U_SDL_rwops_h_3164,
})
var SDL_RWops_ptr = exports.SDL_RWops_ptr = ref.refType(SDL_RWops)
var ushort = exports.ushort = ref.types.ushort
var Uint16 = exports.Uint16 = ushort
var int32_ptr = exports.int32_ptr = ref.refType(int32)
var Uint16_ptr = exports.Uint16_ptr = ref.refType(Uint16)
var SDL_Color = exports.SDL_Color = Struct({
	r: Uint8,
	g: Uint8,
	b: Uint8,
	a: Uint8,
})
var SDL_Color_ptr = exports.SDL_Color_ptr = ref.refType(SDL_Color)
var SDL_Palette = exports.SDL_Palette = Struct({
	ncolors: int32,
	colors: SDL_Color_ptr,
	version: Uint32,
	refcount: int32,
})
var SDL_Palette_ptr = exports.SDL_Palette_ptr = ref.refType(SDL_Palette)
var c__S_SDL_PixelFormat_FI_padding_arr = ArrayType(Uint8, 2)
var SDL_PixelFormat = exports.SDL_PixelFormat = Struct({
	format: Uint32,
	palette: SDL_Palette_ptr,
	BitsPerPixel: Uint8,
	BytesPerPixel: Uint8,
	padding: c__S_SDL_PixelFormat_FI_padding_arr,
	Rmask: Uint32,
	Gmask: Uint32,
	Bmask: Uint32,
	Amask: Uint32,
	Rloss: Uint8,
	Gloss: Uint8,
	Bloss: Uint8,
	Aloss: Uint8,
	Rshift: Uint8,
	Gshift: Uint8,
	Bshift: Uint8,
	Ashift: Uint8,
	refcount: int32,
	next: voit_ptr,
})
var SDL_PixelFormat_ptr = exports.SDL_PixelFormat_ptr = ref.refType(SDL_PixelFormat)
var SDL_Rect = exports.SDL_Rect = Struct({
	x: int32,
	y: int32,
	w: int32,
	h: int32,
})
var SDL_BlitMap = exports.SDL_BlitMap = Struct({
})
var SDL_BlitMap_ptr = exports.SDL_BlitMap_ptr = ref.refType(SDL_BlitMap)
var SDL_Surface = exports.SDL_Surface = Struct({
	flags: Uint32,
	format: SDL_PixelFormat_ptr,
	w: int32,
	h: int32,
	pitch: int32,
	pixels: voit_ptr,
	userdata: voit_ptr,
	locked: int32,
	lock_data: voit_ptr,
	clip_rect: SDL_Rect,
	map: SDL_BlitMap_ptr,
	refcount: int32,
})
var SDL_Surface_ptr = exports.SDL_Surface_ptr = ref.refType(SDL_Surface)

FFI.Library(process.platform == 'win32' ? 'SDL2_ttf' : 'libSDL2_ttf', {
	TTF_Linked_Version: [ SDL_version_ptr, [ ] ],
	TTF_ByteSwappedUNICODE: [ voit, [ int32, ] ],
	TTF_Init: [ int32, [ ] ],
	TTF_OpenFont: [ TTF_Font_ptr, [ string, int32, ] ],
	TTF_OpenFontIndex: [ TTF_Font_ptr, [ string, int32, long, ] ],
	TTF_OpenFontRW: [ TTF_Font_ptr, [ SDL_RWops_ptr, int32, int32, ] ],
	TTF_OpenFontIndexRW: [ TTF_Font_ptr, [ SDL_RWops_ptr, int32, int32, long, ] ],
	TTF_GetFontStyle: [ int32, [ TTF_Font_ptr, ] ],
	TTF_SetFontStyle: [ voit, [ TTF_Font_ptr, int32, ] ],
	TTF_GetFontOutline: [ int32, [ TTF_Font_ptr, ] ],
	TTF_SetFontOutline: [ voit, [ TTF_Font_ptr, int32, ] ],
	TTF_GetFontHinting: [ int32, [ TTF_Font_ptr, ] ],
	TTF_SetFontHinting: [ voit, [ TTF_Font_ptr, int32, ] ],
	TTF_FontHeight: [ int32, [ TTF_Font_ptr, ] ],
	TTF_FontAscent: [ int32, [ TTF_Font_ptr, ] ],
	TTF_FontDescent: [ int32, [ TTF_Font_ptr, ] ],
	TTF_FontLineSkip: [ int32, [ TTF_Font_ptr, ] ],
	TTF_GetFontKerning: [ int32, [ TTF_Font_ptr, ] ],
	TTF_SetFontKerning: [ voit, [ TTF_Font_ptr, int32, ] ],
	TTF_FontFaces: [ long, [ TTF_Font_ptr, ] ],
	TTF_FontFaceIsFixedWidth: [ int32, [ TTF_Font_ptr, ] ],
	TTF_FontFaceFamilyName: [ string, [ TTF_Font_ptr, ] ],
	TTF_FontFaceStyleName: [ string, [ TTF_Font_ptr, ] ],
	TTF_GlyphIsProvided: [ int32, [ TTF_Font_ptr, Uint16, ] ],
	TTF_GlyphMetrics: [ int32, [ TTF_Font_ptr, Uint16, int32_ptr, int32_ptr, int32_ptr, int32_ptr, int32_ptr, ] ],
	TTF_SizeText: [ int32, [ TTF_Font_ptr, string, int32_ptr, int32_ptr, ] ],
	TTF_SizeUTF8: [ int32, [ TTF_Font_ptr, string, int32_ptr, int32_ptr, ] ],
	TTF_SizeUNICODE: [ int32, [ TTF_Font_ptr, Uint16_ptr, int32_ptr, int32_ptr, ] ],
	TTF_RenderText_Solid: [ SDL_Surface_ptr, [ TTF_Font_ptr, string, SDL_Color, ] ],
	TTF_RenderUTF8_Solid: [ SDL_Surface_ptr, [ TTF_Font_ptr, string, SDL_Color, ] ],
	TTF_RenderUNICODE_Solid: [ SDL_Surface_ptr, [ TTF_Font_ptr, Uint16_ptr, SDL_Color, ] ],
	TTF_RenderGlyph_Solid: [ SDL_Surface_ptr, [ TTF_Font_ptr, Uint16, SDL_Color, ] ],
	TTF_RenderText_Shaded: [ SDL_Surface_ptr, [ TTF_Font_ptr, string, SDL_Color, SDL_Color, ] ],
	TTF_RenderUTF8_Shaded: [ SDL_Surface_ptr, [ TTF_Font_ptr, string, SDL_Color, SDL_Color, ] ],
	TTF_RenderUNICODE_Shaded: [ SDL_Surface_ptr, [ TTF_Font_ptr, Uint16_ptr, SDL_Color, SDL_Color, ] ],
	TTF_RenderGlyph_Shaded: [ SDL_Surface_ptr, [ TTF_Font_ptr, Uint16, SDL_Color, SDL_Color, ] ],
	TTF_RenderText_Blended: [ SDL_Surface_ptr, [ TTF_Font_ptr, string, SDL_Color, ] ],
	TTF_RenderUTF8_Blended: [ SDL_Surface_ptr, [ TTF_Font_ptr, string, SDL_Color, ] ],
	TTF_RenderUNICODE_Blended: [ SDL_Surface_ptr, [ TTF_Font_ptr, Uint16_ptr, SDL_Color, ] ],
	TTF_RenderText_Blended_Wrapped: [ SDL_Surface_ptr, [ TTF_Font_ptr, string, SDL_Color, Uint32, ] ],
	TTF_RenderUTF8_Blended_Wrapped: [ SDL_Surface_ptr, [ TTF_Font_ptr, string, SDL_Color, Uint32, ] ],
	TTF_RenderUNICODE_Blended_Wrapped: [ SDL_Surface_ptr, [ TTF_Font_ptr, Uint16_ptr, SDL_Color, Uint32, ] ],
	TTF_RenderGlyph_Blended: [ SDL_Surface_ptr, [ TTF_Font_ptr, Uint16, SDL_Color, ] ],
	TTF_CloseFont: [ voit, [ TTF_Font_ptr, ] ],
	TTF_Quit: [ voit, [ ] ],
	TTF_WasInit: [ int32, [ ] ],
	TTF_GetFontKerningSize: [ int32, [ TTF_Font_ptr, int32, int32, ] ],
	TTF_GetFontKerningSizeGlyphs: [ int32, [ TTF_Font_ptr, Uint16, Uint16, ] ],
}, exports)