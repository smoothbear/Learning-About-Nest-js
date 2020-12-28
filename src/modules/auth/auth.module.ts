import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "../config";
import { AuthService } from "./auth.service";
import { UserModule } from '../user/user.module';
import { UserRepository } from "../user/user.repository";

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule, UserModule],
            useFactory: async (configService: ConfigService) => {
                return {
                    secret: configService.get('JWT_SECRET'), 
                    signOptions: { expiresIn: configService.get('JWT_EXPIRED_TIME')},
                }
            }
        }),
    ],
    providers: [AuthService, ConfigService, UserRepository],
})
export class AuthModule {}