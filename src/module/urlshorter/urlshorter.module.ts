import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlshorterController } from 'src/controller/urlshorter/urlshorter.controller';
import { UrlshorterService } from 'src/service/urlshorter/urlshorter.service';
import { UrlShorterSchema } from 'src/entity/urlshorter.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UrlShorter', schema: UrlShorterSchema },
    ]),
  ],
  controllers: [UrlshorterController],
  providers: [UrlshorterService],
})
export class UrlshorterModule {}
