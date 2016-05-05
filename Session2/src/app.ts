/// <reference path="../typings/tsd.d.ts" />
import {UserController} from "./User/UserController";
import {UserStorage} from "./User/UserStorage";
import {HomeController} from "./Home/HomeController";

let appModule = angular.module("AppModule", ["ngRoute"]);

appModule.service("UserStorage", UserStorage);

appModule.filter("currency", () => {
    return (input: string) => {
        let value = parseFloat(input).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        
        return `\$${value}`;
    };
});

appModule.config(["$routeProvider", "$locationProvider",
    ($routeProvider, $locationProvider) => {
        //$locationProvider.html5Mode(true);
        $routeProvider.
            when("/", {
                templateUrl: "partials/home/home.html",
                controller: HomeController,
                controllerAs: "vm"
            })
            .when("/users/list", {
                templateUrl: "partials/user/list.html",
                controller: UserController,
                controllerAs: "vm"
            })
            .otherwise({redirectTo: "/"});
    }]);

angular.element(document).ready(() => angular.bootstrap(document, ["AppModule"], { strictDi: true }));