import { UserRepository } from "../repositories/UserRepository";
import { ErrorStatus } from "../Errors/ErrorStatus";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';
import { RefreshTokeService } from "./RefreshTokeService";

interface AuthenticateRequest {
    email: string;
    password: string;
}

export class AuthenticateUserService{
    async execute({email, password}: AuthenticateRequest){        

        const user = await UserRepository.findOneBy({email});
        if(!user){
            throw new ErrorStatus("Email/Password incorrect");
        }    

        const passwordMatch = await compare(password, user.password);        
        if(!passwordMatch){
            throw new ErrorStatus("Email/Password incorrect");
        }        

        const token = sign(
        {
            
        }, 
        "45465446f5d65465fdfdf54654f6d46", 
        {
            subject: user.id, 
            expiresIn: "20s" //20 seconds expire token
        }
        );

        const generateRefreshToken = new RefreshTokeService();
        const refreshToken         = await generateRefreshToken.execute(user.id); 

        return { token, refreshToken };
        
    }
}