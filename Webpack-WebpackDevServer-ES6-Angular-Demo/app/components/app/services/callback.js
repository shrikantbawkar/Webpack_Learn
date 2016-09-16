var API_KEY = require("../config");
//import API_KEY from "../config";

class CallbackSer {
	/*@ngInject*/
	constructor($http, $log) {
		this.http = $http;
		this.log = $log;
		return this.callbackSer();
	}
	callbackSer(){
		return {
			getData: (callback) => {
				this.http.get(API_KEY)
					.success((data, status, header, config) => callback(data))
					.error((e) => this.log.info("error : "+e));
			}
		}
	}
}

module.exports = function(ngModule) {
	ngModule.factory("myServiceCallback", /*@ngInject*/($http, $log) => new CallbackSer($http, $log));
}

