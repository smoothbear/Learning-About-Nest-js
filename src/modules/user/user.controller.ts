import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { CreateUserRequest } from "./payload/request/create-user.request";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @HttpCode(201)
    userCreate(@Body() request: CreateUserRequest) {
        this.userService.createUser(request);
    }
 }