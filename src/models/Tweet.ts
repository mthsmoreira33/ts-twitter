import { v4 as uuidv4 } from "uuid";
import { User } from "./User";
import { Like } from "./Like";

export class Tweet {
    private readonly id: string;

    constructor(private _content: string, private _tweetType: 'normal' | 'reply', private _username: string, private _replies: Tweet[] = [], public _likes: Like[] = []) {
        this.id = uuidv4();
    }

