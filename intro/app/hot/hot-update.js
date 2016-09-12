webpackHotUpdate(0,{

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function (ngModule) {
		ngModule.directive("testDirective", function () {
			__webpack_require__(8);
			return {
				restrict: "E",
				scope: {},
				template: __webpack_require__(12),
				controllerAs: "vm",
				controller: /*@ngInject*/["$log", function controller($log) {
					var vm = this;
					vm.greeting = "This is a test directive !!";
					$log.info("I have some info!!");
				}]
			};
		});
	};

/***/ }

})