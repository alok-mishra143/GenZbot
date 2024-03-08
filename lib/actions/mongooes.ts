import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URI is missing 🔴");
  }
  if (isConnected) {
    console.log("=> using existing database connection 🟢 ");
    return;
  }

  try {
    mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Genzbot",
    });
    isConnected = true;
    console.log("Mongodb is connected  🟢 ");
  } catch (error) {
    console.log("=> error connecting to database:", error);
  }
};
