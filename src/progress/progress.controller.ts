import { Controller, Get, Query } from '@nestjs/common';

@Controller('progress')
export class ProgressController {
  @Get()
  getProgress(@Query('user_id') user_id: string, @Query('period') period: string) {
    if (!user_id) {
      return { message: 'Invalid input data' };
    }

    const progressData = [
      { date: '2024-12-01', amount: 2000, goal_met: true },
      { date: '2024-12-02', amount: 1800, goal_met: false },
    ];

    return { progress: progressData };
  }
}

