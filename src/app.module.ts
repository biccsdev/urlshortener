import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UrlshorterController } from './controller/urlshorter/urlshorter.controller';
// import { UrlshorterService } from './service/urlshorter/urlshorter.service';
import { UrlshorterModule } from './module/urlshorter/urlshorter.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://biccs:000001111122222333334444455555@cluster0.ihoyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    UrlshorterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
