import { HttpService } from '@nestjs/axios';
import { Dependencies, Injectable } from '@nestjs/common';

@Injectable()
@Dependencies(HttpService)
export class AppService {
  httpService: any;
  constructor(httpService) {
    this.httpService = httpService;
  }

  getHello(): string {
    return 'Hello World!';
  }

  findAll() {
    return this.httpService.get('https://637a547a10a6f23f7f91af54.mockapi.io/woo/user');
  }

}
