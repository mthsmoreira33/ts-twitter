import { User } from "./User";
import { v4 as uuidv4 } from "uuid";

export class Like {
    id: string;

    constructor(public _username: string) {
        this.id = uuidv4();
    }
}
