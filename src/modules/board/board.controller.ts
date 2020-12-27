import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { BoardService } from "./board.service";
import { BoardRequest } from "./payload/request/board-upload.request";

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get()
    boardList() {
        return this.boardService.boardList();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    uploadBoard(@Body() request: BoardRequest) {
        this.boardService.boardUpload(request);
    }
}