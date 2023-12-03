import { v4 as uuidv4 } from "uuid";
import { users } from "../database/users";
import { Tweet } from "./Tweet";
import { tweets } from "../database/tweets";
import { followings } from "../database/following";
import { Like } from "./Like";

export class User {
    private readonly _id: string;

    constructor(private _username: string, private _email: string, private _password: string, private _tweets: Tweet[] = []) {
        this._id = uuidv4();
        users.push(this);
    }
    get username(): string {
        return this._username;
    }
