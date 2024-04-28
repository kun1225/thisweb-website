import Skeleton from '../Skeleton';

const IndexLoading = () => {
  return (
    <div className='min-h-[80svh] flex flex-col justify-center items-center gap-7 '>
      <Skeleton className="w-[400px] max-w-[50%] h-[20px]" />
      <Skeleton className="w-[900px] max-w-[90%] h-[70px]" />
      <Skeleton className="w-[700px] max-w-[80%] h-[35px]" />
    </div>
  );
};

export default IndexLoading;
