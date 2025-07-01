import { getSubtasksFromGemini } from "@/app/lib/gemini";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const {title} = await req.json();
    const subtasks = await getSubtasksFromGemini(title);

    console.log('Api calling from route.ts')

    return NextResponse.json({subtasks})
}