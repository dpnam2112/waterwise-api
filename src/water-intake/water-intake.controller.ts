import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('water-intake')
export class WaterIntakeController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  logWaterIntake(@Body() body: any) {
    const { user_id, amount, timestamp } = body;
    if (!user_id || !amount || !timestamp) {
      return { message: 'Invalid input data' };
    }
    return { message: 'Water intake logged successfully', data: body };
  }
}

