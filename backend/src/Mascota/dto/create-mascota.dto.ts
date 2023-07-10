import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMascotaDto {
    @IsString()
    @IsNotEmpty()
    id:string;

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    dueño:string;
    
    @IsNumber()
    @IsNotEmpty()
    caracteristicas:string;

   
}
