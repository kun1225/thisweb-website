import Skeleton from '@/src/app/_components/Skeleton';
import Stack from '@/src/app/_components/Stack';

export default function PostPageLoading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="my-8 mx-edge xl:mx-auto">
      <div className="c max-w-6xl mx-auto">
        <div className="flex gap-16 justify-center mb-32">
          <div className="hidden md:block w-40 title-deco" />

          <div className="flex-auto text-center min-h-[70vh] md:min-h-[80vh] grid place-content-center">
            {/* title and date */}
            <div className="mb-16 text-sm">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                <Stack gap={4} className="flex-col md:flex-row">
                  <Skeleton className="w-232 h-6 mx-auto" />
                  <span className="hidden md:block"> </span>
                  <Skeleton className="w-24 h-6 mx-auto" />
                </Stack>
              </div>
              {/* title */}
              <Stack direction="col" className="justify-center" gap={4}>
                <Skeleton className="w-[800px] md:w-[1000px] max-w-[80%] h-12 mx-auto" />
                <Skeleton className="w-[600px] max-w-[60%] h-12 mx-auto" />
              </Stack>
            </div>
            {/* author */}
            <div className="flex justify-between items-center gap-4 md:gap-16">
              <div className="flex-1 bg-gray-200 h-[1px] inline-block" />
              <Skeleton className="w-16 h-4 mx-auto" />
              <div className="flex-1 bg-gray-200 h-[1px] inline-block" />
            </div>
          </div>

          <div className="hidden md:block w-40 title-deco" />
        </div>
      </div>
    </section>
  );
}
