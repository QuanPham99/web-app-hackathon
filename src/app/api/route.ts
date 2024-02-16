// Delete later
import { NextResponse } from "next/server";
import run from "./db";
export async function GET(){
    const con = await run();
    return new NextResponse('connected');
}