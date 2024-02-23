import { NextResponse } from 'next/server';
import { getStudentProject } from '../../../../database/student';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request) {
    // get the query parameters from the url

    const { searchParams } =  await request.json();
    console.log('hello' + searchParams)
    const status = searchParams.get("_id");
    
    const res = await getStudentProject({ _id: status });

    if (res.success) {
      return NextResponse.json({ data: res.data }, { status: 200 });
    } else {
      return NextResponse.json({ error: res.error }, { status: 503 });
  }
}
