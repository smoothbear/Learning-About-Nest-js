import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Board } from "./board.entity";
import { BoardRepository } from "./board.repository";
import { BoardRequest } from "./payload/request/board-upload.request";

@Injectable()
export class BoardService {
    constructor(private readonly boardRepository: BoardRepository) {}

    async boardList(): Promise<Board[]> {
        return this.boardRepository.find();
    }

    async boardUpload(request: BoardRequest) {
        const board = this.boardRepository.create();

        board.title = request.title;
        board.author = //board.author = request.
        board.content = request.content;
        
        try {
            this.boardRepository.save(board);
        } catch {
            throw new HttpException("게시판 업로드 실패.", HttpStatus.BAD_REQUEST)
        }
    }
}