import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UrlShorter } from 'src/entity/urlshorter.entity';

@Injectable()
export class UrlshorterService {
  constructor(
    @InjectModel('UrlShorter')
    private readonly urlshorterModel: Model<UrlShorter>,
  ) {}

  // private urls: UrlShorter[] = [];

  async encode(url: string) {
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

    const urlshortened = new this.urlshorterModel({
      url,
      newUrl,
    });

    const result = await urlshortened.save();

    return result;

    // this.urls.push(urlshortened);

    // return urlshortened;
  }

  async decode(id: string) {
    const url = await this.findUrl(id);
    return url;
  }

  private async findUrl(id: string): Promise<UrlShorter> {
    let urlshort;
    try {
      urlshort = await this.urlshorterModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find url.');
    }

    if (!urlshort) {
      throw new NotFoundException('Could not find url.');
    }

    return urlshort;
  }
}
