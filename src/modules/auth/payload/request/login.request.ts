import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class LoginRequest {
    @IsNotEmpty({message: "아이디를 입력해주세요."})
    @IsString({message: "아이디의 형식이 올바르지 않습니다."})
    @Length(6, 12)
    @ApiPropertyOptional()
    readonly id: string

    @IsNotEmpty({message: "비밀번호를 입력해주세요."})
    @IsString({message: "비밀번호의 형식이 올바르지 않습니다."})
    @Length(6, 12)
    @ApiPropertyOptional()
    readonly password: string
}