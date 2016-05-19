import { Component } from "@angular/core";
import { NgFor } from "@angular/common";
import { UserStorage } from "./Model/UserStorage";

@Component({
    selector: "user-list-component",
    templateUrl: "partials/user/list.html",
    directives: [NgFor]
})
export class UserListComponent {
    public Storage: UserStorage;

    public constructor(storage: UserStorage) {
        this.Storage = storage;
    }
}