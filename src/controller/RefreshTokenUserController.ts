import { Request, Response } from "express";
import { RefreshTokenUserService } from "../service/RefreshTokenUserService";



export class RefreshTokenUserController{
    async hande(req: Request, res: Response){
        const { refresh_token } = req.body;

        const refreshTokenUserService = new RefreshTokenUserService();

        const token = await refreshTokenUserService.execute(refresh_token);

        return res.json(token);
    }
}