import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from "class-validator";

export class BoardRequest {
    @IsNotEmpty({message: '제목은 필수 요소입니다.'})
    @IsString({message: '제목의 형식이 올바르지 않습니다.'})
    @Length(4, 15)
    @ApiPropertyOptional()
    title: string;

    @IsNotEmpty({message: '내용은 필수 요소입니다.'})
    @IsString({message: '내용의 형식이 올바르지 않습니다.'})
    @Length(10, 1000)
    @ApiPropertyOptional()
    content: string;
}