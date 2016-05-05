import {UserEntity} from "./UserEntity";

export class UserStorage
{
    private _Users: UserEntity[];
    
    get Users()
    {
        return this._Users;
    }
    
    constructor()
    {
        this._Users = [];
        
        // Populate with temp data
        for(let i = 0; i < 20; i++)
        {
            this.AddUser(new UserEntity("Name " + i, "Surname" + 1, Math.random()*10000));
        }
    }
    
    public AddUser(user: UserEntity)
    {
        this._Users.push(user);
    }
}