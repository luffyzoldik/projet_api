import { Test, TestingModule } from '@nestjs/testing';
import { DeleteGameController } from './delete-game.controller';

describe('DeleteGameController', () => {
  let controller: DeleteGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteGameController],
    }).compile();

    controller = module.get<DeleteGameController>(DeleteGameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
