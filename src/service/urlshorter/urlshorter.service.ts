import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

import { UrlShorter } from 'src/entity/urlshorter.entity';

@Injectable()
export class UrlshorterService {
  private urls: UrlShorter[] = [];

  encode(url: string) {
    //Error First Methodology
    //Check if URL is provided, if not Exception is thrown
    if (!url) {
      throw new BadRequestException('URL not provided.');
    }

    //String used for reference to check ir url provided is an actual url
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // fragment locator

    if (!pattern.test(url)) {
      throw new BadRequestException(
        'URL provided is not valid for shortening.',
      );
    }

    let outString = '';
    const inOptions = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < 5; i++) {
      outString += inOptions.charAt(
        Math.floor(Math.random() * inOptions.length),
      );
    }

    const newUrl = url.charAt(12) + url.charAt(13) + '.sh/' + outString;

    const urlshortened = {
      id: outString,
      url: url,
      newUrl: newUrl,
    };

    this.urls.push(urlshortened);

    return urlshortened;
  }

  decode(id: string) {
    const item: number = this.urls.findIndex((item) => item.id === id);

    if (!item && item != 0) {
      throw new NotFoundException('Invalid ID.');
    }

    return this.urls[item];
  }
}
