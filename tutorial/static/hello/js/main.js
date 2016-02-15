// define(function(require,exports,module){

// 	//通过require引入依赖
// 	var $ = require('jquery');
// 	var Spinning = require('./spinning');

// 	//通过exports对外提供接口
// 	//
// 	//exports.doSomething = ...
	
// 	//或者通过module。exports 提供整个接口
// 	//
// 	//module.exports = ...


// });


define(function(require,exports,module){

	var $ = require('jquery');
	console.log($);

	var Spinning = require('./spinning');
	var s = new Spinning('#container');
	s.render();

});