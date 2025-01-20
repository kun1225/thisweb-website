const BASEURL = `https://api.convertkit.com/v3/forms`;

export const convertKitFormId = {
  heroFormId: '5590412',
};

export async function subscribeKit(e: React.FormEvent<HTMLFormElement>, formId: string) {
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
      throw new Error(`status: ${response.status}, message: ${response.statusText} `);
    }
  } catch (err: any) {
    console.log(`There was a problem with fetch operation in Newsletter.tsx: ${err}`);
  }
}
