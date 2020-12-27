import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Board } from "./board.entity";

@Entity('comment_tbl')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    author: string;

    @Column({nullable: false})
    content: string;

    @ManyToOne(
        (type) => Board,
        (board) => board.comments, { nullable: false, onDelete: 'CASCADE' }
    )
    board!: Board;
}