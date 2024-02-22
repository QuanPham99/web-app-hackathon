import { NextResponse } from 'next/server';
import { registerUser } from '../../../../database/user';

export async function POST(request) {
  const userInfo = await request.json();

  const result = await registerUser(userInfo);

  if (result.success) {
    return NextResponse.json({}, { status: 200 });
  } else {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
}
