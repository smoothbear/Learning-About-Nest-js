import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateUserRequest {
    @IsNotEmpty({message: '아이디는 필수값입니다.'})
    @IsString({message: '아이디의 형식이 올바르지 않습니다.'})
    @Length(6, 12)
    @ApiPropertyOptional()
    id: string

    @IsNotEmpty({message: '비밀번호는 필수값입니다.'})
    @IsString({message: '비밀번호의 형식이 올바르지 않습니다.'})
    @Length(6, 13)
    @ApiPropertyOptional()
    password: string

    @IsNotEmpty({message: '이름은 필수값입니다.'})
    @IsString({message: '이름의 형식이 올바르지 않습니다.'})
    @Length(2, 6)
    @ApiPropertyOptional()
    name: string
}