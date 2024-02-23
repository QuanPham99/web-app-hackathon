import { NextResponse } from 'next/server';
import { getStudent } from '../../../database/student';

export async function GET(request) {
    // get the query parameters from the url
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
  
    const res = await getStudent({ status });
  
    if (res.success) {
      return NextResponse.json({ data: res.data }, { status: 200 });
    } else {
      return NextResponse.json({ error: res.error }, { status: 503 });
    }
  }
import { NextResponse } from 'next/server';
import { getStudent } from '../../../database/student';
import { getServerSession } from 'next-auth';

export async function GET(request) {
    // get the query parameters from the url
    const { searchParams } = new URL(request.url);
    const session = await getServerSession(authOptions)
    const status = searchParams.get('status');
  
    const res = await getStudent({ status });
  
    if (res.success) {
      return NextResponse.json({ data: res.data }, { status: 200 });
    } else {
      return NextResponse.json({ error: res.error }, { status: 503 });
    }
  }