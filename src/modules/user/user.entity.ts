import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_tbl')
export class User {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({unique: true, nullable: false})
    id: string;

    @Column({nullable: false})
    password: string;

    @Column({nullable: false})
    name: string;
}