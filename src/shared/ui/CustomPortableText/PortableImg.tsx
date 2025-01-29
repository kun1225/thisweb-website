import Img from '../Img';

export function PortableImg(source: any) {
  const value = source.value;
  return <Img image={value} />;
}
