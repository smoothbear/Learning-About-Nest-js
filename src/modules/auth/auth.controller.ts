import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginRequest } from "./payload/request/login.request";
import { TokenResponse } from "./payload/response/token.response";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post()
    login(@Body() request: LoginRequest): Promise<TokenResponse> {
        return this.authService.login(request);
    }
}