/**
 * @desc webpack打包入口文件
 */

 const arrayEqual = require('./array/arrayEqual')

 const addClass = require('./class/addClass')
 const hasClass = require('./class/hasClass')
 const removeClass = require('./class/removeClass')

 module.exports = {
	 arrayEqual,

	 addClass,
	 hasClass,
	 removeClass
 }
