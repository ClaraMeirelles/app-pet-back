import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SeuServico {
  gerarUUID(): string {
    const novoUUID = uuidv4();
    return novoUUID;
  }
}
