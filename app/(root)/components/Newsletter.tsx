'use client';
import type { FormHTMLAttributes, Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import clsx from 'clsx';

// subscribe Email function
async function subscribeEmail(
  e: React.FormEvent<HTMLFormElement>,
  formId: string,
  setIsSuccess: Dispatch<SetStateAction<boolean>>,
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
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: 'POST',
        cache: 'no-cache',
        headers,
        body,
      },
    );

    if (!response.ok) {
      setIsSuccess(false);
      throw new Error(
        `status: ${response.status}, message: ${response.statusText} `,
      );
    }

    setIsSuccess(true);
  } catch (err: any) {
    console.log(
      `There was a problem with fetch operation in Newsletter.tsx: ${err}`,
    );
  }
}

// Newsletter component
const Newsletter = ({
  formId,
  onSubscribe,
  ...props
}: {
  formId: string;
  onSubscribe: (
    e: React.FormEvent<HTMLFormElement>,
    formId: string,
    setIsSuccess?: Dispatch<SetStateAction<boolean>>,
  ) => Promise<void>;
} & FormHTMLAttributes<HTMLFormElement>) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubscribe(e, formId, setIsSuccess);
  };

  return (
    <>
      <form
        onSubmit={formOnSubmit}
        data-testid="newsletterForm"
        className="flex gap-4 flex-col md:flex-row"
        {...props}
      >
        <input
          type="email"
          name="email"
          required
          placeholder="輸入你的 email ..."
          data-testid="newsletterInput"
          className="basis-3/4 p-2 border-2 rounded-md w-full outline-none focus:border-secondary duration-200 text-sm font-light"
        />
        <input
          type="submit"
          value="免費訂閱"
          data-testid="newsletterButton"
          className="p-2 text-sm basis-1/4 bg-secondary text-white rounded-md cursor-pointer hover:bg-[#2577a3] duration-200"
        />
      </form>
      <p
        data-testid="correctMessage"
        className={`text-xs text-gray-500 duration-200 ${clsx(
          isSuccess
            ? 'translate-y-0 opacity-100 visible'
            : '-translate-y-2 opacity-0 invisible',
        )}`}
      >
        訂閱成功！記得去 email 按確認！
      </p>
    </>
  );
};

export default Newsletter;
