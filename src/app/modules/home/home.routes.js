"use strict";
var home_component_1 = require('./home.component');
exports.HomeRoutes = [
    { path: '', component: home_component_1.HomeComponent,
        data: {
            meta: {
                disableUpdate: true
            }
        }
    },
];
