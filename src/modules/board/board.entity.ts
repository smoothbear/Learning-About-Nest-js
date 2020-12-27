import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column({precision: 6, type: 'timestamp', nullable: false})
    date: Date;
}