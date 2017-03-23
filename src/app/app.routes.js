"use strict";
var no_content_component_1 = require('./modules/no-content/no-content.component');
var home_routes_1 = require('./modules/home/home.routes');
var crud_routes_1 = require('./modules/employee/crud.routes');
exports.ROUTES = home_routes_1.HomeRoutes.concat(crud_routes_1.CrudRoutes, [
    { path: '**', component: no_content_component_1.NoContentComponent }
]);
