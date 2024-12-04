import { Module } from '@nestjs/common';
import { WaterIntakeService } from './water-intake.service';
import { WaterIntakeController } from './water-intake.controller';

@Module({
  providers: [WaterIntakeService],
  controllers: [WaterIntakeController]
})
export class WaterIntakeModule {}
