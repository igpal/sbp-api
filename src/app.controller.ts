import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/notifySbp')
  getHello(@Body() data: any) {
    return this.appService.sbpData(data);
  }
}
