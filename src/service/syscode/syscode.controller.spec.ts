import { Test, TestingModule } from '@nestjs/testing';
import { SyscodeController } from './syscode.controller';

describe('SyscodeController', () => {
  let controller: SyscodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SyscodeController],
    }).compile();

    controller = module.get<SyscodeController>(SyscodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
