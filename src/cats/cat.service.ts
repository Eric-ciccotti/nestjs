import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    return this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
