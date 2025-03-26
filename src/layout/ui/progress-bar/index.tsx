'use client';

import { ProgressProvider } from '@bprogress/next/app';

export default function RootLayoutProgressBar() {
  return (
    <ProgressProvider
      color="#5588A3"
      height="2px"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
