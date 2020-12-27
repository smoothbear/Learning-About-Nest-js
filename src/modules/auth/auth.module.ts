import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "../config";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {
                return {
                    secret: configService.get('JWT_SECRET'), 
                    signOptions: { expiresIn: configService.get('JWT_EXPIRED_TIME')},
                }
            },
            inject: [ConfigService]
        }),
    ],
    providers: [AuthService],
})
export class AuthModule {}