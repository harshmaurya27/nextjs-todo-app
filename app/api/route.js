import { connectDB } from "@/lib/config/db.js";
import TodoModel from "@/lib/models/TodoModel.js";
import { NextResponse } from "next/server";

const loadDB = async () => {
  await connectDB();
};
loadDB();

export async function GET(request) {
  const todos = await TodoModel.find({});

  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  const { title, description } = await request.json();
  await TodoModel.create({ title, description });
  return NextResponse.json({ msg: "todo created" });
}

export async function DELETE(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndDelete(mongoId);
  return NextResponse.json({ msg: "todo deleted" });
}
export async function PUT(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndUpdate(mongoId, {
    $set: {
      isCompleted: true,
    },
  });
  return NextResponse.json({ msg: "todo completed" });
}