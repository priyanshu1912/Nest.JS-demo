import { Injectable } from '@nestjs/common';
import { CatEntity } from './entities/CatEntity';
import { Repository } from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import { CreateCatDto } from './dtos/CreateCat.dto';

@Injectable()
export class CatService {

    constructor( @InjectRepository(CatEntity) private readonly catRepository: Repository<CatEntity> ){}

    fetchCatService() {
        return this.catRepository.find()
    }

    fetchCatServiceWithId(id: number) {
        return this.catRepository.findOneBy({id})
    }

    fetchCatServiceWithRange(min:number, max:number) {
        return this.catRepository.createQueryBuilder('cat').where('cat.age >= :startAge', { startAge: min }).andWhere('cat.age <= :endAge',{endAge: max}).getMany()
    }

    createCatService(catDetails: CreateCatDto) {
        const newCat = this.catRepository.create(catDetails)
        return this.catRepository.save(newCat)
    }

    deleteCatService(id: number) {
        return this.catRepository.delete({id})
    }

    updateCatService(id:number, catDetails:any) {
        return this.catRepository.update({id},catDetails)
    }
}
