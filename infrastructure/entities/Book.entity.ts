import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    release_year: number

    @Column()
    category: string

    @Column()
    author: string 
    
}