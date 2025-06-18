import { Injectable } from '@nestjs/common';
import { Cat } from './models/cat.model';
import { CreateCatInput } from './dtos/create-cat.input';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  create(createCatInput: CreateCatInput): Cat {
    const cat: Cat = { id: Date.now().toString(), ...createCatInput };
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
