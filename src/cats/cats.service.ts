import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Cat } from './entities/cat.entity'
import { Breed } from 'src/breeds/entities/breed.entity'

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,

    @InjectRepository(Breed)
    private readonly breedRepository: Repository<Breed>
  ) { }

  async create(createCatDto: CreateCatDto) {
    const breed = await this.breedRepository.findOneBy({ name: createCatDto.breed})

    if (!breed) {
      throw new NotFoundException('Breed not found')
    }

    return await this.catRepository.save({
      ...createCatDto,
      breed: breed
    }) // Almacena la instancia en la base de datos
  }

  async findAll() {
    return await this.catRepository.find()
  }  

  async findOne(id: number) {
    return await this.catRepository.findOneBy({ id })
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    const breed = await this.breedRepository.findOneBy({ name: updateCatDto.breed})

    if (!breed) {
      throw new NotFoundException('Breed not found')
    }

    return await this.catRepository.update(id, {
      ...updateCatDto,
      breed: breed
    })
  }

  async remove(id: number) {
    return await this.catRepository.softDelete({ id }) // Se elimina el registro pero se guarda el registro en la columna deletedAt
    // return await this.catRepository.softRemove({ id }) // Se elimina el registro y se elimina el registro de la base de datos

  }
}
