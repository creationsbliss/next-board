import { User } from "./models";
import { connectToDatabase } from "./mongodb";


// fetch all users from database
export const fetchUsers = async () => {
    try {
        connectToDatabase();
        const users = await User.find();
        return users
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users")
    }
}