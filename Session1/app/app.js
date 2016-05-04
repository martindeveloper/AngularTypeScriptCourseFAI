var UserEntity = (function () {
    function UserEntity(Name, Surname) {
        this.Name = Name;
        this.Surname = Surname;
    }
    return UserEntity;
}());
var AppController = (function () {
    function AppController($scope) {
        this.$scope = $scope;
        this.$scope.vm = this;
        this.UserName = "";
        this.Names = [
            new UserEntity("Karel", "Novák"),
            new UserEntity("Petr", "Černý")
        ];
    }
    AppController.prototype.SayHello = function () {
        this.Greeting = "Hello " + this.UserName + "!";
        var nameParts = this.UserName.split(" ", 2);
        nameParts[1] = nameParts[1] == undefined ? "" : nameParts[1];
        console.log(this);
        console.log(nameParts);
        this.Names.push(new UserEntity(nameParts[0], nameParts[1]));
    };
    return AppController;
}());
var appModule = angular.module("AppModule", []);
appModule.controller("AppController", AppController);
//# sourceMappingURL=app.js.map