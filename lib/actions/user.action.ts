"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "./mongooes";

interface UserModel {
  clerkId: string;
  name: string;
  email: string;
  password?: string;
  picture: string;
}

interface delUser {
  clerkId: string;
}

export async function CreateUser(UserData: UserModel) {
  try {
    connectToDatabase();
    const newUser = User.create(UserData);
    console.log("User created", newUser);
    return newUser;
  } catch (error) {
    console.log("Error creating user", error);
  }
}

export async function deleteUser(UserData: delUser) {
  const { clerkId } = UserData;
  try {
    connectToDatabase();

    const deletedUser = User.findOneAndDelete({ clerkId });
    if (!deletedUser) {
      throw new Error("User not found");
    }
  } catch (error) {
    console.log("Error deleting user", error);
  }
}
