import { NextResponse } from 'next/server';
import { registerUser } from '../../../../database/user';

export async function POST(request) {
  const { firstName, lastName, email, password } = await request.json();

  const result = await registerUser({
    firstName,
    lastName,
    email,
    password,
  });

  if (result.success) {
    return NextResponse.json({}, { status: 200 });
  } else {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
}
