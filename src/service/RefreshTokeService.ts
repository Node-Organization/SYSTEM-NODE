import dayjs from 'dayjs';

import { RefreshTokenRepository } from "../repositories/RefreshTokenRepository";



export class RefreshTokeService{
    async execute(userId: string){

        const expiresIn = dayjs().add(15, "second").unix();

        const createRefreshToken = RefreshTokenRepository.create({
            userId,
            expiresIn
        });

        await RefreshTokenRepository.save(createRefreshToken);

        return createRefreshToken;
    }
}