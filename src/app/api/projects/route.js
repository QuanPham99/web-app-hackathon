import { NextResponse } from 'next/server';
import { getAllProjects } from '../../../database/project';

export async function GET(request) {
  // get the query parameters from the url
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  const res = await getAllProjects({ status });

  if (res.success) {
    return NextResponse.json({ data: res.data }, { status: 200 });
  } else {
    return NextResponse.json({ error: res.error }, { status: 503 });
  }
}
