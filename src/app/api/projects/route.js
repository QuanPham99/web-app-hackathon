import { NextResponse } from "next/server";
import { getAllProjects } from "../../../database/project";
import { addProject } from "../../../database/company";
export async function GET(request) {
  // get the query parameters from the url
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  const res = await getAllProjects({ status });

  if (res.success) {
    return NextResponse.json({ data: res.data }, { status: 200 });
  } else {
    return NextResponse.json({ error: res.error }, { status: 503 });
  }
}
export async function POST(request) {
  // get the query parameters from the url
  // console.log(request);
  const projectInfo = await request.json();
  const result = await addProject(projectInfo);

  if (result.success) {
    return NextResponse.json({}, { status: 200 });
  } else {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
}
