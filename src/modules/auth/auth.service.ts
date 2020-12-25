import { Injectable } from "@nestjs/common";
import { LoginRequest } from "./payload/request/login.request";

@Injectable()
export class AuthService {
    async login(request: LoginRequest) {

    }
}