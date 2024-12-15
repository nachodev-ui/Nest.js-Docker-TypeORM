import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

// DTO: Data Transfer Object, es un objeto que 
// se utiliza para transferir datos entre diferentes
// capas de la aplicación
export class CreateBreedDto {
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    @IsNotEmpty()
    name: string
}
