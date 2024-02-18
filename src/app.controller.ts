import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService) {}
  @Get(':services/*')
  async getData(@Param('services') services: string,@Req() request: Request) {
    //Step 1: Get services
    const servicesAPI =  services;
    //Step 2: Get domain api for service
    let domain = ""
    if(servicesAPI=== "myapi")
    {
      domain = "https://637a547a10a6f23f7f91af54.mockapi.io"
    }
    //Step 3: Create domain for api
    const url = request.url
    let newUrl = url.replace(`/${servicesAPI}`, domain)
    const response = await this.httpService.axiosRef.request({
      method: request.method,
      url: newUrl,
     // headers: request.headers,
      data: request.body
    });
    return response.data;

   // console.log(newUrl)
    //Step 4: Transfer API for services 
    //return await this.appService.findAll(newUrl);
  }
  // @Post(':services')
  // async postData(): {
  //   return "Post"
  // }

  // @Patch(':services')
  // async getHelloss(): string {
  //   return "Hello"
  // }
  
}
