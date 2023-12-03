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

    get email(): string {
        return this._email;
    }

    sendTweet(newTweet: Tweet): void {
        this._tweets.push(newTweet);
    }

    reply(replyContent: Tweet, repliedTweet: Tweet) {
        repliedTweet.replies.push(replyContent);
    }

    showTweets(): void {
        let likesText: string;

        this._tweets.forEach((tweet, i) => {
            if (tweet._likes.length === 0) {
             likesText = `[${tweet._likes.length} curtidas]`
            } else if (tweet._likes.length === 1) {
             likesText = `[@${tweet._likes[i]._username} curtiu]`
            } else if (tweet._likes.length > 1) {
             likesText = `[@${tweet._likes[1]._username} e mais ${tweet._likes.length - 1} pessoas curtiram isso]`
            }

            console.log(
                `@${this._username}: ${tweet.content}\n${likesText}\n > @${tweet.replies[i].username}:${tweet.replies[i].content}\n--------------------`
            )
        })
    }

    follow(user: User): void {
        followings.push(user);
        console.log(`Você está seguindo o user ${user._username}`);

    }

    likeTweet(tweet: Tweet, like: Like): void {
        const hasLiked = tweet._likes.some(liked => liked._username === like._username);
        if (hasLiked) {
            console.log("Você já deu like neste tweet!");
            return;
        }
        tweet._likes.push(like);
    }
}
