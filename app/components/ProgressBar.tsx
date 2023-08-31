"use client"

// NProgress
import { AppProgressBar } from 'next-nprogress-bar';

const ProgressBar = () => {
  return (
    <AppProgressBar
      height="2px"
      color="#5588A3"
      options={{ showSpinner: false }}
      shallowRouting
    />
  )
}

export default ProgressBar;