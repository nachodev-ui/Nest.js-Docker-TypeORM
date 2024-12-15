import { IsInt, IsOptional, IsPositive, IsString, MinLength } from "class-validator"

// Es la interfaz que define los datos que se van a recibir en la petición
export class CreateCatDto {

    @IsString()
    @MinLength(1)
    name: string

    @IsInt()
    @IsPositive()
    age: number

    @IsString()
    @IsOptional()
    breed?: string
}
