import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginRequest } from "./payload/request/login.request";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post()
    login(@Body() request: LoginRequest) {
        return this.authService.login(request);
    }
}