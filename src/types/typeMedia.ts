import { TypeImage } from './typeImage';
import { TypeVideo } from './typeVideo';

export type TypeMedia =
  | {
      type: 'image';
      image?: TypeImage;
      video?: never;
    }
  | {
      type: 'video';
      image?: never;
      video?: TypeVideo;
    };
