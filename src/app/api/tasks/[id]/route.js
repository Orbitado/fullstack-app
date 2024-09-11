import { NextResponse } from "next/server";
import { connectDb } from "@/utils/mongoose";
import Task from "@/models/Task";

export async function GET(request, { params }) {
  try {
    connectDb();
    const task = await Task.findById(params.id);
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error fetching task" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    connectDb();
    const body = await request.json();
    const task = await Task.findByIdAndUpdate(params.id, body);
    return NextResponse.json(
      { payload: `Task ${params.id} updated successfully`, task: task },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error updating task" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    connectDb();
    const task = await Task.findByIdAndDelete(params.id);
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error deleting task" }, { status: 500 });
  }
}
