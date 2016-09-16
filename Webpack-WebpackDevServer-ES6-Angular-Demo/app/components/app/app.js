require("!style!css!sass!../common/css/style.scss");
require("../common/css/bootstrap.min.css");
require("../common/css/ng-grid.css");

var angular = require("angular");
require("angular-ui-router");
require("angular-sanitize");

var ngModule = angular.module("myApp", ["ui.router", "ngSanitize"]);

require("./runApp")(ngModule);
require("./configRouters")(ngModule);
require("./controllers")(ngModule);
require("./directives")(ngModule);
require("./filters")(ngModule);
require("./services")(ngModule);
