import { NextResponse } from "next/server";
import { connectDb } from "@/utils/mongoose";
import Task from "@/models/Task";

export async function GET() {
  try {
    connectDb();
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error fetching tasks" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    connectDb();
    const body = await request.json();
    const task = new Task(body);
    await task.save();
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error creating task" }, { status: 500 });
  }
}
