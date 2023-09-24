import type { Dispatch, SetStateAction } from 'react';

const BASEURL = `https://api.convertkit.com/v3/forms`;

export async function subscribeConvertKitEmail(
  e: React.FormEvent<HTMLFormElement>,
  formId: string,
  setIsSuccess?: Dispatch<SetStateAction<boolean>>,
) {
  e.preventDefault();

  const target = e.currentTarget;
  const email = (target.elements.namedItem('email') as HTMLInputElement).value;

  const body = JSON.stringify({
    api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
    email,
  });
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
  });

  try {
    const response = await fetch(`${BASEURL}/${formId}/subscribe`, {
      method: 'POST',
      cache: 'no-cache',
      headers,
      body,
    });

    if (!response.ok) {
      if (setIsSuccess) setIsSuccess(false);
      throw new Error(
        `status: ${response.status}, message: ${response.statusText} `,
      );
    }

    if (setIsSuccess) setIsSuccess(false);
  } catch (err: any) {
    console.log(
      `There was a problem with fetch operation in Newsletter.tsx: ${err}`,
    );
  }
}
