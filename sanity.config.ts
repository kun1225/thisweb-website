'use client';

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */
import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schemas } from './src/sanity/schemas';
import { structure } from './src/sanity/structure';
import { defineConfig } from 'sanity';
import { media } from 'sanity-plugin-media';
import { structureTool } from 'sanity/structure';

// import { iconPicker } from 'sanity-plugin-icon-picker';

export default defineConfig({
  basePath: '/studio',
  title: 'ThisWeb Studio',
  projectId,
  dataset,
  schema: { types: schemas as any },
  plugins: [
    structureTool({ structure }),
    media(),
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(),
    // iconPicker(),
  ],
});
