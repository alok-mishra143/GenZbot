import moongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  moongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("mongodb url missing ");
  }

  if (isConnected) {
    return console.log("mongodb is connected ");
  }

  try {
    await moongoose.connect(process.env.MONGODB_URL, {
      dbName: "GenZbot",
    });

    isConnected = true;
    console.log("is connected mongo db");
  } catch (e) {
    console.log("this is the error   on mongo db ", e);
  }
};
