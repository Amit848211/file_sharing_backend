import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://amitkumarsmpt:oMYN5DBMsdMnOuSr@cluster0.cux80mv.mongodb.net/file_share"
    )
    .then(()=>console.log("DB connected"));
};





