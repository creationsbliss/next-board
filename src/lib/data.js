import { User } from "./models";
import { connectToDatabase } from "./mongodb";

// fetch all users from database
export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDatabase();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch {
    throw new Error("Failed to fetch users");
  }
};
