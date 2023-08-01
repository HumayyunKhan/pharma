import { Injectable } from "@nestjs/common"
import User from "../../database/entities/user.entity"
import {Repository, getConnection} from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export default class UserServices{
    constructor(
        @InjectRepository(User)
        private UserRepo : Repository<User>
    ){}
    async findOne():Promise<any>{
const users=await this.UserRepo.find()
return users

    }
    findAll(){
return "HELLO TO ALL USERSS"
    }
}