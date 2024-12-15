import { Breed } from 'breeds/entities/breed.entity'
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @DeleteDateColumn()
    deletedAt: Date

    @ManyToOne(() => Breed, (breed) => breed.id, {
      eager: true // Para que se cargue el gato con la raza
    })
    breed: Breed
}
