import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlshorterController } from './controller/urlshorter/urlshorter.controller';
import { UrlshorterService } from './service/urlshorter/urlshorter.service';

@Module({
  imports: [],
  controllers: [AppController, UrlshorterController],
  providers: [AppService, UrlshorterService],
})
export class AppModule {}
