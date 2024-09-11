import { connectDb } from "@/utils/mongoose";
import Task from "@/models/Task";

export async function loadTasks() {
  await connectDb();
  const tasks = await Task.find();
  return tasks;
}