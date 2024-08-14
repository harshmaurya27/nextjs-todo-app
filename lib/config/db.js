import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://mauryaharsh464:mauryaharsh464todo@cluster0.utfns.mongodb.net/todo-app"
  );
  console.log("DB connected");
};
