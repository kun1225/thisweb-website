import { useEffect, useState } from 'react';

const useHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById('g-header');
    setHeaderHeight(header?.clientHeight || 0);
  });

  return {
    headerHeight,
  };
};

export default useHeight;
