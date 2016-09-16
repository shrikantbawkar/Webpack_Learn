class ConfigRouters {
	/*@ngInject*/
	constructor ($stateProvider, $urlRouterProvider) {
        //debugger;
		this.stateProvider = $stateProvider;
		this.urlRouterProvider = $urlRouterProvider;
		this.configRouters();
    }
	configRouters() {
		this.urlRouterProvider.otherwise("/app");
		this.stateProvider.state("app", {
			url: "/app", 
			template: require("../common/view/app.html")
		}).state("app.scope", {
			url: "/scope", 
			template: require("../common/view/scope.html"),
			/*@ngInject*/
			controller: function($scope)
			{
				$scope.msg = "Dummy123 test HMR1";
				document.getElementById("btn").addEventListener("click", function(){ 								
					$scope.$apply(function(){
						$scope.msg = "Changed text!!"; 					
					}); 
				}); 
				
				$scope.angularBtn = function(){
					$scope.msg = "Angular btn changed text!!"; 
				}
			}
		})
		.state("app.watch", {
			url: "/watch", 
			template: require("../common/view/watch.html"),
			/*@ngInject*/
			controller: function($scope)
			{
				$scope.$watch("msg1", function(newVal, oldVal){ 							
					if(newVal) if(newVal.length > 0) $scope.newMsg1 = "Greeting, "+newVal; 
				}); 
				$scope.updateVal = function(newVal){
					if(newVal.length > 0) $scope.newMsg2 = "Greeting, "+newVal; 
				} 
			}
		})
		.state("app.custom_filters", {
			url: "/custom_filters", 
			template: require("../common/view/custom_filters.html"),
			controller: "custom_filters"
		})
		.state("app.publisher_Subscriber", {
			url: "/publisher_Subscriber", 
			template: require("../common/view/publisher_Subscriber.html")
		})
		.state("app.service", {
			url: "/service", 
			template: require("../common/view/service.html")
		})
		.state("app.service.service_callback", {
			url: "/service_callback", 
			template: require("../common/view/service_callback.html"),
			controller: "service_callback"
		})
		.state("app.service.service_Promise", {
			url: "/service_Promise", 
			template: require("../common/view/service-promiseAPI.html"),
			controller: "service_PromiseAPI"
		})
		.state("app.service.service_Promise_Custom", {
			url: "/service_Promise_Custom", 
			template: require("../common/view/service-promiseAPI-custom.html"),
			controller: "service_PromiseAPICustom"
		})
		.state("app.directive", {
			url: "/directive", 
			template: require("../common/view/directives.html")
		})
		.state("app.directive.directive_Simple", {
			url: "/directive_Simple", 
			template: require("../common/view/directive_Simple.html")
		})
		.state("app.directive.directive_ScopeHandling", {
			url: "/directive_ScopeHandling", 
			template: require("../common/view/directive_ScopeHandling.html"),
			controller: "directive_ScopeHandling"
		})
		.state("app.directive.directive_EventHandling", {
			url: "/directive_EventHandling", 
			template: require("../common/view/directive_EventHandling.html")
		})
		.state("app.directive.directive_Transclusion", {
			url: "/directive_Transclusion", 
			template: require("../common/view/directive_Transclusion.html")
		});		
	}
}

module.exports = function(ngModule) {
	ngModule.config(($stateProvider, $urlRouterProvider) => new ConfigRouters($stateProvider, $urlRouterProvider))
}
