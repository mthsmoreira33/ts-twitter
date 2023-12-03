import { Like } from "./models/Like";
import { Tweet } from "./models/Tweet";
import { User } from "./models/User";


const user = new User("mthsm", "mthsmoreira59@gmail.com", "123");

user.showTweets();

const tweet = new Tweet("Olá!", "normal", user.username);
user.sendTweet(tweet);

const user2 = new User("abc", "abc@gmail.com", "123");
const like1 = new Like(user2.username);
const reply1 = new Tweet("Oi!", "reply", user2.username);

user2.likeTweet(tweet, like1);
user2.reply(reply1, tweet);

user.showTweets();
