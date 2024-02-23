import { NextResponse } from 'next/server';
import { getStudentProject } from '../../../../database/student';

export async function GET(request) {
    // get the query parameters from the url

    const { searchParams } =  new URL(request.url);
    const projectId = searchParams.get("_id");
            // Check if projectId is null or undefined
    const res = await getStudentProject({ _id: projectId });
    if (res.success) {
      return NextResponse.json({ data: res.data }, { status: 200 });
    } else {
      return NextResponse.json({ error: res.error }, { status: 503 });
  }
}
