import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('comment_tbl')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    author: string;

    @Column({nullable: false})
    content: string;
}