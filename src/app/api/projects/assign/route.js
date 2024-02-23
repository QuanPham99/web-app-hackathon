import { NextResponse } from 'next/server';
import { updateStudentAssignment } from '../../../../database/project';

export async function PUT(request) {
  const { student_ids, project_id } = await request.json();

  const result = await updateStudentAssignment(project_id, student_ids);

  if (result.success) {
    return NextResponse.json({}, { status: 200 });
  } else {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
}
