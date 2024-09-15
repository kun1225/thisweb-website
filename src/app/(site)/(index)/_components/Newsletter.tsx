'use client';
import type { FormHTMLAttributes } from 'react';
import { useState } from 'react';
import clsx from 'clsx';

// Newsletter component
function Newsletter({
  formId,
  onSubscribe,
  ...props
}: {
  formId: string;
  onSubscribe: (
    e: React.FormEvent<HTMLFormElement>,
    formId: string,
  ) => Promise<void>;
} & FormHTMLAttributes<HTMLFormElement>) {
  const [isSuccess, setIsSuccess] = useState(false);

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubscribe(e, formId)
      .then(() => {
        setIsSuccess(true);
      })
      .catch(() => {
        setIsSuccess(false);
      });
  };

  return (
    <>
      <form
        className="flex gap-4 flex-col md:flex-row"
        data-testid="newsletterForm"
        onSubmit={formOnSubmit}
        {...props}
      >
        <input
          className="basis-3/4 p-2 border-2 rounded-md w-full outline-none focus:border-secondary duration-200 text-sm font-light"
          data-testid="newsletterInput"
          name="email"
          placeholder="輸入你的 email ..."
          required
          type="email"
        />
        <input
          className="p-2 text-sm basis-1/4 bg-secondary text-white rounded-md cursor-pointer hover:bg-[#2577a3] duration-200"
          data-testid="newsletterButton"
          type="submit"
          value="免費訂閱"
        />
      </form>
      <p
        className={`text-xs text-gray-500 duration-200 ${clsx(
          isSuccess
            ? 'translate-y-0 opacity-100 visible'
            : '-translate-y-2 opacity-0 invisible',
        )}`}
        data-testid="correctMessage"
      >
        訂閱成功！記得去 email 按確認！
      </p>
    </>
  );
}

export default Newsletter;
