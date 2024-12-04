import { Module } from '@nestjs/common';
import { RemindersModule } from './reminders/reminders.module';
import { WaterIntakeModule } from './water-intake/water-intake.module';
import { ProgressModule } from './progress/progress.module';
import { StatsModule } from './stats/stats.module';
import { RewardsModule } from './rewards/rewards.module';

@Module({
  imports: [
    RemindersModule,
    WaterIntakeModule,
    ProgressModule,
    StatsModule,
    RewardsModule,
  ],
})
export class AppModule {}

