import { Test, TestingModule } from '@nestjs/testing';
import { UrlshorterController } from './urlshorter.controller';

describe('UrlshorterController', () => {
  let controller: UrlshorterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlshorterController],
    }).compile();

    controller = module.get<UrlshorterController>(UrlshorterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
