import { User } from "../schema/users.schema.js";


export const usersCreateService = (user) => {
    try {
        const newUser = new User(user);
        return newUser.save();
    }
    catch (error) {
        throw new Error("Error creating user: " + error.message);
    }
}

export const usersFindService = () => {
    try {
        return User.find({});
    } catch (error) {
        throw new Error("Error finding users: " + error.message);
    }
}

export const usersFindByIdService = (id) => {
    try {
        return User.findById(id);
    } catch (error) {
        throw new Error("Error finding user by ID: " + error.message);
    }
}

export const usersUpdateService = (id, user) => {
    try {
        const updatedUser = User.findByIdAndUpdate(id, user, { new: true });
        if (!updatedUser) {
            throw new Error("User not found");
        }
        return updatedUser;
    } catch (error) {
        throw new Error("Error updating user: " + error.message);
    }
}

export const usersDeleteService = (id) => {
    try {
        const deletedUser = User.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error("User not found");
        }
        return deletedUser;
    } catch (error) {
        throw new Error("Error deleting user: " + error.message);
    }
}