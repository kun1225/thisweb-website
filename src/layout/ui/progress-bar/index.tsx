'use client';
import { AppProgressBar } from 'next-nprogress-bar';

export default function RootLayoutProgressBar() {
  return (
    <AppProgressBar color="#5588A3" height="2px" options={{ showSpinner: false }} shallowRouting />
  );
}
