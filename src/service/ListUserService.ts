import { UserRepository } from "../repositories/UserRepository";
import { classToPlain } from 'class-transformer';

export class ListUserService{
    async execute(){
        const users = await UserRepository.find();
        return classToPlain(users);
    }
}