import Video from '../Video';

export function PortableVideo(source: any) {
  const data = {
    file: source?.value,
  } as any;

  return (
    <Video autoPlay={false} data={data} className="mb-[1rem] aspect-video w-full bg-neutral-900" />
  );
}
