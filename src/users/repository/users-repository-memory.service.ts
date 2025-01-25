import { Injectable } from "@nestjs/common";
import { UsersRepositoryService } from "./users-repository.service";
import { users } from "../db/users.data";
import { Observable, of } from "rxjs";
import { User, UsersAPI } from "../interface/users.interface";
import { getCollection, getItem } from "../../utils/utils";

@Injectable()
export class UsersRepositoryMemoryService extends UsersRepositoryService {
    users = users;
    getAll(
        search?: string,
        page?: string,
        pageSize?: string,
      ): Observable<UsersAPI> {
        return of(getCollection(this.users, search, page, pageSize));
      }
    
      getOne(id: string): Observable<User> {
        return of(getItem(id, this.users));
      }
    
      getByUserName(username: string): Observable<User> {
        return of(users.find((user) => user.username === username));
      }
}