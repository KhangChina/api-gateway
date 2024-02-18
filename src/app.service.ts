import { HttpService } from '@nestjs/axios';
import { Dependencies, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  async findAll(domain) {
    const data = await this.httpService.axiosRef.get('https://637a547a10a6f23f7f91af54.mockapi.io/woo/user',);
    return data.data;
  }

  create(createGatewayDto: any) {
    return 'This action adds a new gateway';
  }

  findOne(id: number) {
    return `This action returns a #${id} gateway`;
  }

  update(id: number, updateGatewayDto: any) {
    return `This action updates a #${id} gateway`;
  }

  remove(id: number) {
    return `This action removes a #${id} gateway`;
  }

}
