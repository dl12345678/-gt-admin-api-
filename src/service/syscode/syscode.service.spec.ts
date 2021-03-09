import { Test, TestingModule } from '@nestjs/testing';
import { SyscodeService } from './syscode.service';

describe('SyscodeService', () => {
  let service: SyscodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SyscodeService],
    }).compile();

    service = module.get<SyscodeService>(SyscodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
