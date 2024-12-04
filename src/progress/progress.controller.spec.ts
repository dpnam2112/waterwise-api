import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProgressResponseDto } from './progress.dto';

@ApiTags('progress')
@Controller('progress')
export class ProgressController {
  @Get()
  @ApiOkResponse({
    type: ProgressResponseDto
  })
  getProgress(@Query('user_id') user_id: string, @Query('period') period: string): ProgressResponseDto {
    const progressData = [
      { date: '2024-12-01', amount: 2000, goal_met: true },
      { date: '2024-12-02', amount: 1800, goal_met: false },
    ];

    return { progress: progressData } as ProgressResponseDto;
  }
}

