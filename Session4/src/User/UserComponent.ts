import { Component } from "@angular/core";
import { UserStorage } from "./Model/UserStorage";
import { UserListComponent } from "./UserListComponent";

@Component({
    selector: "user-component",
    templateUrl: "partials/user/user.html",
    providers: [UserStorage],
    directives: [UserListComponent]
})
export class UserComponent {
    public Storage: UserStorage;

    public constructor(storage: UserStorage) {
        this.Storage = storage;
    }

    public AddUser(event: Event) {
        this.Storage.AddTempUsers(1);
    }

    public RemoveUser(event: Event) {
        this.Storage.PopUser();
    }
}