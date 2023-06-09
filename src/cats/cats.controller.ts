import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CatService } from 'src/cats/cat.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
