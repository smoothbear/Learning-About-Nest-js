import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "../config";
import { UserRepository } from "../user/user.repository";
import { LoginRequest } from "./payload/request/login.request";
import { TokenResponse } from "./payload/response/token.response";

@Injectable()
export class AuthService {
    constructor(private readonly userRepository: UserRepository, private readonly jwtService: JwtService, private readonly configService: ConfigService) {}

    async login(request: LoginRequest): Promise<TokenResponse> {
        try {
            const user = await this.userRepository.findOneOrFail({
                where: {
                    id: request.id
                }
            });

            if (user.password === request.password) {
                return ({
                    accessToken: this.jwtService.sign(user.id),
                    expireTime: this.configService.get('JWT_EXPIRED_TIME'),
                });
            } else {
                throw new HttpException('로그인 정보가 일치하지 않습니다.', HttpStatus.UNAUTHORIZED);
            }
        } catch {
            throw new HttpException('아이디를 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
        }
    }
}