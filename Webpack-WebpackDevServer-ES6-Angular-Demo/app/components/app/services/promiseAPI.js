var API_KEY = require("../config");

class PromiseAPISer {
	/*@ngInject*/
	constructor($http, $log) {
		this.http = $http;
		this.log = $log;
		return this.promiseAPI();
	}
	promiseAPI(){
		return {
			getData: () => this.http.get(API_KEY)
		}
	}
}

module.exports = function(ngModule) {
	ngModule.factory("myServicePromiseAPI", /*@ngInject*/($http, $log) => new PromiseAPISer($http, $log));
}

