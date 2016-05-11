import { Component, Inject, Injectable } from '@angular/core';
import { UserEntity } from "./UserEntity";
import { ConfigService } from "../../ConfigService";

@Injectable()
export class UserStorage {
    private _Users: Array<UserEntity>;

    public get Users() {
        return this._Users;
    }

    public constructor(config: ConfigService) {
        this._Users = [];
        this.AddTempUsers(5);

        if (config.IsDebug) {
            setInterval(() => {
                this.AddTempUsers(1);
            }, 2000);
        }
    }

    public AddTempUsers(num: number): void {
        for (let i = 0; i < num; i++) {
            let balance = (i + 1) * (Math.random() * 1000);
            this._Users.push(new UserEntity(
                "Name",
                "Surname",
                balance,
                new Date())
            );
        }
    }

    public PopUser(): UserEntity {
        return this._Users.pop();
    }
}