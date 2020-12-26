import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserRepository } from "../user/user.repository";
import { LoginRequest } from "./payload/request/login.request";
import { TokenResponse } from "./payload/response/token.response";

@Injectable()
export class AuthService {
    constructor(private readonly userRepository: UserRepository) {}

    async login(request: LoginRequest): Promise<TokenResponse> {
        try {
            const user = await this.userRepository.findOneOrFail({
                where: {
                    id: request.id
                }
            });

            if (user.password === request.password) {
                return ({
                    accessToken: ,
                    refreshToken: ,
                    expireTime: ,
                });
            } else {
                throw new HttpException('로그인 정보가 일치하지 않습니다.', HttpStatus.UNAUTHORIZED);
            }
        } catch {
            throw new HttpException('아이디를 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
        }
    }
}