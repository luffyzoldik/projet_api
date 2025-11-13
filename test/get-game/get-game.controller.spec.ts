import { Test, TestingModule } from '@nestjs/testing';
import { GetGameController } from './get-game.controller';

describe('GetGameController', () => {
  let controller: GetGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetGameController],
    }).compile();

    controller = module.get<GetGameController>(GetGameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
