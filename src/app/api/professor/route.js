import { acceptProject } from '../../../database/project';
import { NextResponse } from 'next/server';

export async function PUT(request) {
  // get the query parameters from the url
  // console.log(request);
  const body = await request.json();
  // console.log(body);
  const result = await acceptProject(body.project_id, body.professor_id);

  if (result.success) {
    return NextResponse.json({}, { status: 200 });
  } else {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
}
