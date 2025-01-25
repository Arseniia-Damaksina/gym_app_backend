import { User } from "../interface/users.interface";

export class CreateUserDto implements User {
    id: string;
    username: string;
    password: string;
    name: string;
}