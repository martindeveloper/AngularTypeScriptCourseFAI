import {UserEntity} from "./UserEntity";
import {UserStorage} from "./UserStorage";

export class UserController {
    public static $inject = ["UserStorage"];

    get Users() {
        return this.Storage.Users;
    }

    public constructor(private Storage: UserStorage) {
    }
}