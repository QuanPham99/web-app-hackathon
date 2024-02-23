import { NextResponse } from 'next/server';
import { getStudent } from '../../../database/student';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request) {
    // get the query parameters from the url
    const { searchParams } = new URL(request.url);
    const session = await getServerSession(authOptions)
    const status = searchParams.get('status');

    if (session?.user) {

        const res = await getStudent({ email: session.user.email });

        if (res.success) {
          return NextResponse.json({ data: res.data }, { status: 200 });
        } else {
          return NextResponse.json({ error: res.error }, { status: 503 });
        }
    } else {
      return NextResponse.json({ error: 'User not found!' }, { status: 400 });
    

    }
  
  }
