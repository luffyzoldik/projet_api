import { Test, TestingModule } from '@nestjs/testing';
import { CreateGameController } from './create-game.controller';

describe('CreateGameController', () => {
  let controller: CreateGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateGameController],
    }).compile();

    controller = module.get<CreateGameController>(CreateGameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
