import Task from "../models/TaskModal.js";
import User from "../models/UserModel.js";

export const createTask = async (req, res) => {
    try {
        const { title, status, priority, deadline, description, content, authorId } = req.body;

        const user = await User.findById(authorId);

        if(!status && !deadline){
            return res.status(400).json({ message: "Status and deadline are required" });
        }

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const newTask = new Task({
            title,
            status,
            priority,
            deadline,
            description,
            content,
            author: user._id
        })

        await newTask.save();

        res.status(201).json(newTask);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getAllTasks = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const tasks = await Task.findOne({ author: id });
        
        if(!tasks) {
            return res.status(404).json({ message: "Tasks not found" });
        }

        res.status(200).json(tasks);
    } catch (error) {
        
    }
}