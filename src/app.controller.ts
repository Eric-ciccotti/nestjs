import { Controller, Get, HttpCode, Post, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('https://google.fr', 301)
  getHello(@Req() request: Request): any {
    return `voici la requete : ${JSON.stringify(request.body)}`;
  }
}
