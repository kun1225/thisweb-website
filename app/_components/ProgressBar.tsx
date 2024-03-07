'use client';

// NProgress
import { AppProgressBar } from 'next-nprogress-bar';

function ProgressBar() {
  return (
    <AppProgressBar
      color="#5588A3"
      height="2px"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}

export default ProgressBar;
