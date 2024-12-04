import { Test, TestingModule } from '@nestjs/testing';
import { WaterIntakeController } from './water-intake.controller';

describe('WaterIntakeController', () => {
  let controller: WaterIntakeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaterIntakeController],
    }).compile();

    controller = module.get<WaterIntakeController>(WaterIntakeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
