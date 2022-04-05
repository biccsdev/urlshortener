import * as mongoose from 'mongoose';

export const UrlShorterSchema = new mongoose.Schema({
  url: { type: String, required: true },
  newUrl: { type: String, required: true },
});

export interface UrlShorter extends mongoose.Document {
  id: string;
  url: string;
  newUrl: string;
}
