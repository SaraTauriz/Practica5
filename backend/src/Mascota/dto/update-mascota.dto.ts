import { PartialType } from '@nestjs/mapped-types';
import { CreateMascotaDto } from './create-mascota.dto';
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateMascotaDto extends PartialType(CreateMascotaDto) {
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
    caracteristicas: string;

    
}
