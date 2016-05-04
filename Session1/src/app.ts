/// <reference path="../typings/tsd.d.ts" />

interface AppScope extends angular.IScope
{
    vm: AppController;
}

class UserEntity
{
    public constructor(public Name: string, public Surname: string)
    {
    }
}

class AppController
{
    public UserName: string;
    public Greeting: string;
    public Names: UserEntity[];
    
    public constructor(private $scope: AppScope)
    {
        this.$scope.vm = this;
        this.UserName = "";
        this.Names = [
            new UserEntity("Karel", "Novák"),
            new UserEntity("Petr", "Černý")
        ];
    }
    
    public SayHello()
    {
        this.Greeting = `Hello ${this.UserName}!`;
        
        let nameParts = this.UserName.split(" ", 2);
        nameParts[1] = nameParts[1] == undefined ? "" : nameParts[1];
        
        console.log(this);
        console.log(nameParts);
        
        this.Names.push(new UserEntity(nameParts[0], nameParts[1]));
    }
}

let appModule = angular.module("AppModule", []);
appModule.controller("AppController", AppController);