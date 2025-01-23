import { NextResponse } from 'next/server';

const BASEURL = `https://api.convertkit.com/v3/forms`;
// const BASEURL_V4 = `https://api.kit.com/v4/forms`;

export async function POST(request: Request) {
  try {
    const { email, name, formId } = await request.json();

    const body = JSON.stringify({
      api_key: process.env.KIT_API_V3,
      email,
      first_name: name || '',
    });

    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8',
    });

    const response = await fetch(`${BASEURL}/${formId}/subscribe`, {
      method: 'POST',
      headers,
      body,
    });
    console.log('🚀 ~ POST ~ response:', response);

    if (!response.ok) {
      throw new Error(`status: ${response.status}, message: ${response.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: '訂閱失敗，請稍後再試' }, { status: 500 });
  }
}
