import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Param,
  Body,
} from '@nestjs/common';
import { UrlshorterService } from 'src/service/urlshorter/urlshorter.service';

@Controller('urlshorter')
export class UrlshorterController {
  constructor(private urlshorterService: UrlshorterService) {}

  @Get('decode/:id')
  @HttpCode(HttpStatus.FOUND)
  decode(@Param('id') id: string) {
    return this.urlshorterService.decode(id);
  }

  @Post('encode')
  @HttpCode(HttpStatus.CREATED)
  encode(@Body('url') url: string) {
    return this.urlshorterService.encode(url);
  }
}
