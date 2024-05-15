import Skeleton from '../_components/Skeleton';
import Stack from '../_components/Stack';

const postsPageLoading = () => {
  return (
    <Stack direction='col' className='gap-14'>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i}>
          <Skeleton className="w-[800px] max-w-[100%] md:max-w-[80%] h-6" />
          <Skeleton className="w-[800px] max-w-[80%] h-6 mt-2 block md:hidden" />
          <Skeleton className="w-36 max-w-[30%] h-2.5 mt-2" />
          <Skeleton className="w-[100%] h-3.5 mt-3" />
          <Skeleton className="w-[100%] h-3.5 mt-1.5 block md:hidden" />
          <Skeleton className="w-[100%] h-3.5 mt-1.5 block md:hidden" />
          <Skeleton className="w-[50%] max-w-[50%] h-4 mt-1.5" />
        </div>
      ))}
    </Stack>
  );
};

export default postsPageLoading;
