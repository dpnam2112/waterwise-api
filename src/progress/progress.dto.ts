import { ApiProperty } from '@nestjs/swagger';

export class ProgressItem {
  @ApiProperty({ example: '2024-12-01', description: 'Date of progress', format: 'date' })
  date: string;

  @ApiProperty({ example: 2000, description: 'Amount of water consumed in milliliters' })
  amount: number;

  @ApiProperty({ example: true, description: 'Indicates if the daily goal was met' })
  goal_met: boolean;
}

export class ProgressResponseDto {
  @ApiProperty({ type: [ProgressItem], description: 'Array of progress items' })
  progress: ProgressItem[];
}

