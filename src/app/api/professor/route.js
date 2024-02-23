import { acceptProject } from '../../../database/project';
import { NextResponse } from 'next/server';

export async function PUT(request) {
  // get the query parameters from the url
  const { project_id, professor_id, date_accepted } = await request.json();
  const result = await acceptProject(project_id, professor_id, date_accepted);

  if (result.success) {
    return NextResponse.json({}, { status: 200 });
  } else {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
}
