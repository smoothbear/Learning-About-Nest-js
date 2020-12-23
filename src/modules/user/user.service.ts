import { UserRepository } from './user.repository';
import { CreateUserRequest } from './payload/request/create-user.request';
import { Injectable } from "@nestjs/common";
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async createUser(request: CreateUserRequest) {
        const user = this.userRepository.create(request);
        this.userRepository.save(user);
    }

    async getUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async getUserById(id: string): Promise<User> {
        return this.userRepository.findOne({
            where: {
                id: id,
            },
        });
    }
}