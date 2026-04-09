import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "zomato_clone",
    });

    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
