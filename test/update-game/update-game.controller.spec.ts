import { Test, TestingModule } from '@nestjs/testing';
import { UpdateGameController } from './update-game.controller';

describe('UpdateGameController', () => {
  let controller: UpdateGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateGameController],
    }).compile();

    controller = module.get<UpdateGameController>(UpdateGameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
