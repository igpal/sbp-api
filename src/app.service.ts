import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sbpData(data) {
    console.log(data);
  }
}
