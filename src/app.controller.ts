import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(':services/*')
  async findAllData(@Param('services') services: string,@Param('endpoint') endpoint: string) {
    console.log(services)
    console.log(endpoint[0])
    return await this.appService.findAll()
  }

  @Post(':services')
  getPosts(): string {
    return "Post"
  }

  @Patch(':services')
  getHelloss(): string {
    return "Hello"
  }
}
