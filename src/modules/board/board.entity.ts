import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './comment.entity';

@Entity('board_tbl')
export class Board {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    author: string;

    @Column({nullable: false})
    authorId: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt!: Date;

    @OneToMany(
        (type) => Comment,
        (comment) => comment.board
    )
    comments!: Comment[]; 
}