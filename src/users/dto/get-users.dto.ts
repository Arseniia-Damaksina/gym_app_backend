import { UsersAPI } from "../interface/users.interface";
import { CreateUserDto } from "./create-user.dto";

export class GetUSersDto implements UsersAPI {
    hasNext: boolean;
    items: Array<CreateUserDto>;
}