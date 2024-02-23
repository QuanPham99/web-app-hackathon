import { NextResponse } from 'next/server';
import { getAllStudents } from '../../../../database/student';

export async function GET(request) {
  const res = await getAllStudents();

  console.log(res);
  if (res.success) {
    return NextResponse.json({ data: res.data }, { status: 200 });
  } else {
    return NextResponse.json({ error: res.error }, { status: 503 });
  }
}
