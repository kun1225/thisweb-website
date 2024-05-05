import { useEffect, useState } from 'react';

const useIsMounted = () => {
  let [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted;
}

export default useIsMounted