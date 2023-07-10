import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Mascota } from './entities/mascota.entity';

@Injectable()
export class MascotaService {

  private mascotas: Mascota[]=[
    {id:1, nombre:'mayra', dueño: "sara", caracteristicas:"blanco"},
    {id:2, nombre:'pablo',dueño: "ivette", caracteristicas:"negro"},
  ]

  create(createMascotaDto: CreateMascotaDto) {
    const mascota = new Mascota();
    mascota.id=  Math.max( ... this.mascotas.map(elemento => elemento.id),0 )+1 ;
    mascota.nombre= createMascotaDto.nombre;
    mascota.dueño= createMascotaDto.dueño;
    mascota.caracteristicas= createMascotaDto.caracteristicas;
    
    this.mascotas.push(mascota);
    return mascota;
  }

  findAll() : Mascota[] {
    return this.mascotas;
  }

  findOne(id: number) {
    const mascota =  this.mascotas.find(mascotas=> mascota.id===id);
    if (!mascota) throw new NotFoundException(`ID ${id} not found`)
    return mascota;
  }

  update(id: number, updateMascotaDto: UpdateMascotaDto) {
    const {nombre, dueño, caracteristicas} = updateMascotaDto;
    const mascota = this.findOne(id);
    if (nombre) mascota.nombre= nombre;
    if (dueño) mascota.dueño= dueño;
    if (caracteristicas) mascota.caracteristicas= caracteristicas;
    

    this.mascotas =  this.mascotas.map( elemento=> {
      if (elemento.id===id) return mascota;
      return elemento;
    } )

    return mascota;

  }

  remove(id: number) {
    this.findOne(id);
    this.mascotas =  this.mascotas.filter(elemento=> elemento.id!== id);
  }
}
