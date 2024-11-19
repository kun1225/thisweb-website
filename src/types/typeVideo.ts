import { TypeImage } from './typeImage';

export type TypeVideo = {
  _type: 'video';
  controls: boolean;
  thumbnail: TypeImage;
  file: {
    _type: 'file';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
};
