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


define(function(require, exports, module) {

    var $ = require('jquery');
    console.log($);

    var Spinning = require('spinning');
    var s = new Spinning('#container');
    s.render();

    $('body').on('click',function(){

    var module = require.async('./module',function(m){

        console.log(m);

    });

    });

    // var module = require.async('./module', function(m) {
    //     console.log(m.name);
    // });

    console.log(require.resolve('./module'));

    // seajs.use(['../jquery'],function($){
    //     console.log($);
    // });

});



//jquery插件 模块化


// jquery-abc插件
/*define(function(reqiure,exports,module){

	var $ = reqiure('jquery');

	$.abc = function (){

	};

});*/

//插件调用

/*seajs.use(['jquery','jquery-abc'],function($){

	$.abc();

});*/


