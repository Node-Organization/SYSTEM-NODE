import { sign } from "jsonwebtoken";
import { ErrorStatus } from "../Errors/ErrorStatus";
import { RefreshTokenRepository } from "../repositories/RefreshTokenRepository";


export class RefreshTokenUserService{
    async execute(refresh_token: string){

        const refreshToken = await RefreshTokenRepository.findOne({
            where: {
                id: refresh_token
            }
        });

        if(!refreshToken){
            throw new ErrorStatus("Refresh token invalid");
        }

        const token = sign(
            {
                
            }, 
            "45465446f5d65465fdfdf54654f6d46", 
            {
                subject: refreshToken.userId, 
                expiresIn: "20s" //20 seconds expire token
            }
        );

        return token;
    }
}