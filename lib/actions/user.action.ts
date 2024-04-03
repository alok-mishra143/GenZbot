"use server";

import User, { IUser } from "@/database/user.model";
import { connectToDatabase } from "./mongooes";
import { revalidatePath } from "next/cache";

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

interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<IUser>;
}

export async function CreateUser(UserData: UserModel) {
  try {
    connectToDatabase();
    const newUser = User.create(UserData);
    console.log("User created => 🟢", newUser);
    return newUser;
  } catch (error) {
    console.log("Error creating user", error);
  }
}

export async function deleteUser(userData: delUser) {
  try {
    connectToDatabase();

    const { clerkId } = userData;

    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    //TODO delete commnet ans etc..

    const deletedUser = await User.findByIdAndDelete(user._id);

    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(userData: UpdateUserParams) {
  try {
    connectToDatabase();

    const { clerkId, updateData } = userData;
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
    revalidatePath("/Chats");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
