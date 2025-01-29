'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { formatBrNewLine, cn, hasObjectValue } from '@/src/shared/lib/utils';
import { subscribeKit } from '@/src/shared/api/subscribeKit';

// Components
import { Button } from '@/src/shared/ui/Button';
import Media from '../Media';

const subscribeSchema = z.object({
  name: z.string().min(1, '請填入名稱').max(50, '名字不能超過 50 個字'),
  email: z.string().min(1, '請填入 Email').email('請輸入有效的 Email 地址'),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

export function KitForm(source: any) {
  const { title, subtitle, paragraph, media, formId, btnLabel, successMessage } = source.value;

  const hasMedia = media?.video?.file || media?.image?.asset;

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
    <div
      className={cn(
        'not-prose to-blue-5 my-5 rounded border-blue-4 bg-gradient-to-br from-white-pure shadow-xl',
        hasMedia ? 'flex flex-col gap-0 md:flex-row md:gap-8' : ''
      )}
    >
      <div
        className={cn(
          'flex flex-col gap-4 p-8 text-center',
          hasMedia ? 'basis-1/2 md:text-left' : ''
        )}
      >
        {subtitle ? <p className="font-bold text-blue-1">{subtitle}</p> : null}

        {title ? (
          <p
            className="text-4xl font-bold leading-normal drop-shadow"
            dangerouslySetInnerHTML={{ __html: formatBrNewLine(title) }}
          />
        ) : null}

        {paragraph ? <p dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }} /> : null}

        <div className="grid grow">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn(
              'col-[1/2] row-[1/2] mx-auto flex w-full max-w-md flex-col gap-4 transition',
              isSubmitSuccessful && 'invisible opacity-0'
            )}
          >
            <div className="relative">
              <p
                className={cn(
                  'absolute top-0 -translate-y-full text-xs text-red-400 transition',
                  errors?.email?.message ? 'visible opacity-100' : 'invisible opacity-0'
                )}
              >{`*${errors?.email?.message || ''}`}</p>
              <input
                {...register('email')}
                type="email"
                placeholder="你的 Email 是？"
                className="w-full rounded-md border px-4 py-2"
                disabled={isSubmitting}
              />
            </div>

            <div className="relative">
              <p
                className={cn(
                  'absolute top-0 -translate-y-full text-xs text-red-400 transition',
                  errors?.name?.message ? 'visible opacity-100' : 'invisible opacity-0'
                )}
              >{`*${errors?.name?.message || ''}`}</p>
              <input
                {...register('name')}
                type="text"
                placeholder="怎麼稱呼你？"
                className="w-full rounded-md border px-4 py-2"
                disabled={isSubmitting}
              />
            </div>

            <Button type="submit" isLoading={isSubmitting}>
              {btnLabel || '免費領取'}
            </Button>
          </form>

          <div
            className={cn(
              'invisible col-[1/2] row-[1/2] flex items-center justify-center opacity-0 transition delay-100',
              isSubmitSuccessful && 'visible opacity-100'
            )}
          >
            <p className="w-full text-pretty rounded-lg bg-white px-4 py-2 text-center font-bold text-black-light shadow">
              {successMessage || '🎉 已送出！記得檢查你的 Email 喔！'}
            </p>
          </div>
        </div>
      </div>

      <Media data={media} className="mx-auto max-w-md basis-1/2" withPlaceholder={false} />
    </div>
  );
}
