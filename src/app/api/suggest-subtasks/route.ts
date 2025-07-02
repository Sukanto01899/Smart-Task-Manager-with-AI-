import { getSubtasksFromGemini } from "@/app/lib/gemini";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title } = await req.json();

  try {
    const subtasks = await getSubtasksFromGemini(title);
    return NextResponse.json({ subtasks, status: 200 });
  } catch (err) {
    const message =
      err instanceof Error && err.message
        ? err.message
        : "Something went wrong";
    return NextResponse.json({ message, status: 500 });
  }
}
