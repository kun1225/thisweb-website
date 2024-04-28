import Skeleton from '../_components/Skeleton';
import Stack from '../_components/Stack';

const postsPageLoading = () => {
  return (
    <Stack direction='col' gap={8}>
      {Array.from({ length: 3 }).map((_) => (
        <div>
          <Skeleton className="w-[800px] max-w-[80%] h-6" />
          <Skeleton className="w-32 max-w-[20%] h-3 mt-1" />
          <Skeleton className="w-[100%] h-4 mt-2" />
          <Skeleton className="w-80 max-w-[50%] h-4 mt-1" />
        </div>
      ))}
    </Stack>
  );
};

export default postsPageLoading;
