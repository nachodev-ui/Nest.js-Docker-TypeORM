import { Cat } from "src/cats/entities/cat.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

// Entidad: es una clase que representa una tabla 
// en la base de datos
@Entity()
export class Breed {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50 })
    name: string

    @OneToMany(() => Cat, (cat) => cat.breed)
    cats: Cat[]
}

