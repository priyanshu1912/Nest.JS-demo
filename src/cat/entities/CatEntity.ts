import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CatEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    name: string

    @Column({ 
        nullable: false
    })
    age: number

    @Column({
        nullable: false
    })
    breed: string

}