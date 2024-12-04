import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('reminders')
export class RemindersController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createReminder(@Body() body: any) {
    const { user_id, time, frequency, condition } = body;
    if (!user_id || !time || !frequency) {
      return { message: 'Invalid input data' };
    }
    return { message: 'Reminder created successfully', data: body };
  }
}

