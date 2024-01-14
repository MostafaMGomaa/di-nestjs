import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerServies: PowerService) {}
  getData() {
    console.log('Drawing 20 watts of power');
    this.powerServies.supplyPower(20);
    return 'Data!';
  }
}
