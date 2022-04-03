import { Test, TestingModule } from '@nestjs/testing';
import { UrlshorterService } from './urlshorter.service';

describe('UrlshorterService', () => {
  let service: UrlshorterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlshorterService],
    }).compile();

    service = module.get<UrlshorterService>(UrlshorterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
