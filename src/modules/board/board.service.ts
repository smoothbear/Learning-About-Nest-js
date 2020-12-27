import { Injectable } from "@nestjs/common";
import { Board } from "./board.entity";
import { BoardRepository } from "./board.repository";
import { BoardRequest } from "./payload/request/board-upload.request";

@Injectable()
export class BoardService {
    constructor(private readonly boardRepository: BoardRepository) {}

    async boardList() {
        return this.boardRepository.find();
    }

    async boardUpload(request: BoardRequest) {
        const board = this.boardRepository.create();
        this.boardRepository.save();
    }
}