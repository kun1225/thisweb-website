'use client'

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect, useState } from 'react';
import theme from '@/style/theme';

export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        styles: { branding: { brandColor: theme.colors.primary } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);
  return (
    <Cal
      calLink="thisweb/60min"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
}
