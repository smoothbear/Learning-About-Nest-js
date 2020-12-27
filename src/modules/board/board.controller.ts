import { Body, Controller, Get, Post } from "@nestjs/common";
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
    uploadBoard(@Body() request: BoardRequest) {
        this.boardService.boardUpload(request);
    }
}