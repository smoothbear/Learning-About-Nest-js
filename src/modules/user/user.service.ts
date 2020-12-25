import { UserRepository } from './user.repository';
import { CreateUserRequest } from './payload/request/create-user.request';
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async createUser(request: CreateUserRequest) {
        const user = this.userRepository.create(request);
        this.userRepository.save(user);
    }
}