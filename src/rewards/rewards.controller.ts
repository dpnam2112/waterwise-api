import { Controller, Get, Query } from '@nestjs/common';

@Controller('rewards')
export class RewardsController {
  @Get()
  getRewards(@Query('user_id') user_id: string) {
    if (!user_id) {
      return { message: 'Invalid input data' };
    }

    return {
      stars: 50,
      leaderboard_position: 3,
      medals: ['Gold', 'Silver'],
    };
  }
}

