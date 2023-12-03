import { v4 as uuidv4 } from "uuid";
import { users } from "../database/users";
import { Tweet } from "./Tweet";
import { tweets } from "../database/tweets";
import { followings } from "../database/following";
import { Like } from "./Like";

export class User {
