import { getSubtasksFromGemini } from "@/app/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse){
    const {title} = await req.json();
    const subtasks = await getSubtasksFromGemini(title);

    console.log('Api calling from route.ts')

    return NextResponse.json({subtasks})
}