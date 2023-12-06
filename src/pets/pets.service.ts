import { Injectable } from '@nestjs/common';
import { PetsRepository } from './repository/pets.repository';

@Injectable()
export class PetsService {
    constructor(
        private readonly repository: PetsRepository
    ) { }

    async getPets() {
        return await this.repository.getPets()
    }
}
