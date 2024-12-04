import { Controller, Get, Query } from '@nestjs/common';

@Controller('stats')
export class StatsController {
  @Get()
  getStats(@Query('user_id') user_id: string) {
    if (!user_id) {
      return { message: 'Invalid input data' };
    }

    return {
      weekly_total: 14000,
      monthly_total: 60000,
      yearly_total: 720000,
    };
  }
}

