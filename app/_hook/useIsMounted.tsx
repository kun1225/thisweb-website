import { useEffect, useState } from 'react';

const useIsMounted = () => {
  let [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted;
};

export default useIsMounted;
