import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_MONGO}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log("Db connect");
  } catch (error) {
    console.log("Error happened");
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
