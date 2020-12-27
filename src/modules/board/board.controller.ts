import { Controller, Get, Post } from "@nestjs/common";
import { BoardService } from "./board.service";

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get()
    boardList() {
        return this.boardService.boardList();
    }

    @Post()
    uploadBoard() {
        this.boardService.boardUpload();
    }
}