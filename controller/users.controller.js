import { usersCreateService, usersDeleteService, usersFindByIdService, usersFindService, usersUpdateService } from "../service/users.service.js";

export const usersCreateController = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await usersCreateService(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
}

export const usersFindController = async (req, res) => {
    try {
        const users = await usersFindService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error finding users", error: error.message });
    }
}

export const usersFindByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersFindByIdService(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error finding user", error: error.message });
    }
}

export const usersUpdateController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.body;
        const updatedUser = await usersUpdateService(id, user);
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
}

export const usersDeleteController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await usersDeleteService(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
}