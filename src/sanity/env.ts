const isProd = process.env.NODE_ENV === 'production';
const branch = process.env.VERCEL_GIT_COMMIT_REF ?? '';

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-09-01';

export const dataset = isProd
  ? branch === 'dev'
    ? process.env.NEXT_PUBLIC_SANITY_DATASET_DEV
    : process.env.NEXT_PUBLIC_SANITY_DATASET
  : process.env.NEXT_PUBLIC_SANITY_DATASET_DEV;

// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// );

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
