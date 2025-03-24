'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { subscribeKit } from '@/src/shared/api/subscribeKit';
import { cn } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/ui/Button';

export const subscribeSchema = z.object({
  name: z.string().min(1, '請填入名稱').max(20, '名字不能超過 20 個字'),
  email: z.string().min(1, '請填入 Email').email('請輸入有效的 Email 地址'),
});

export type SubscribeFormData = z.infer<typeof subscribeSchema>;

export function HomeForm({
  formId,
  btnLabel,
  successMessage,
}: {
  formId: string;
  btnLabel?: string;
  successMessage?: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeFormData) => {
    try {
      await subscribeKit(data, formId);
      reset();
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <div className="mt-8 grid">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          'col-[1/2] row-[1/2] flex flex-col gap-4 transition lg:flex-row',
          isSubmitSuccessful && 'invisible opacity-0'
        )}
      >
        <div className="relative grow-[4]">
          <p
            className={cn(
              'absolute -top-1 -translate-y-full text-xs text-red-400 transition',
              errors?.email?.message ? 'visible opacity-100' : 'invisible opacity-0'
            )}
          >{`*${errors?.email?.message || ''}`}</p>
          <input
            {...register('email')}
            type="email"
            placeholder="你的 Email"
            className="border-gray w-full rounded-md border bg-white px-4 py-2 transition"
            disabled={isSubmitting}
          />
        </div>

        <div className="relative grow-[4]">
          <p
            className={cn(
              'absolute -top-1 -translate-y-full text-xs text-red-400 transition duration-300',
              errors?.name?.message ? 'visible opacity-100' : 'invisible opacity-0'
            )}
          >{`*${errors?.name?.message || ''}`}</p>
          <input
            {...register('name')}
            type="text"
            placeholder="怎麼稱呼你？"
            className="border-gray w-full rounded-md border bg-white px-4 py-2 transition"
            disabled={isSubmitting}
          />
        </div>

        <div className="grow-[1]">
          <Button type="submit" isLoading={isSubmitting}>
            {btnLabel || '免費訂閱'}
          </Button>
        </div>
      </form>

      <div
        className={cn(
          'invisible col-[1/2] row-[1/2] flex items-center justify-center opacity-0 transition delay-300 duration-300',
          isSubmitSuccessful && 'visible opacity-100'
        )}
      >
        <p className="text-blue border-gray w-full rounded-lg border bg-white p-4 font-bold text-pretty shadow-md">
          {successMessage || '🎉 訂閱成功！記得檢查你的 Email 喔！'}
        </p>
      </div>
    </div>
  );
}
