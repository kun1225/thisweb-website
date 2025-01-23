export const convertKitFormId = {
  heroFormId: '5590412',
  magnetId: '7599115',
};

export async function subscribeKit(data: { email: string; name?: string }, formId: string) {
  const response = await fetch('/api/kit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      formId,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || '訂閱失敗，請稍後再試');
  }

  return response.json();
}
