import { useEffect, useState } from 'react';

const useIsMounted = () => {
  let [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return false;
  else return true;
}

export default useIsMounted