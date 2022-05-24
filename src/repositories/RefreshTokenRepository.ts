import { AppDataSource } from "../DataSource";
import { RefreshToken } from "../entities/RefreshToken";

export const RefreshTokenRepository = AppDataSource.getRepository(RefreshToken);