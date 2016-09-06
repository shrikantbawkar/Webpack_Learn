module.exports = function(ngModule) {
	ngModule.directive("testDirective", function(){
		require("!style!css!sass!./test-style.scss");
		return {
			restrict: "E", 
			scope: {}, 
			template: require("./test-directive.html"), 
			controllerAs: "vm", 
			controller: /*@ngInject*/function($log) {
				var vm = this; 
				vm.greeting = "This is a test directive !@@!";
				$log.info("I have some info!!");
			}
		}
	});
}