import mongoose from "mongoose";

const taskModal = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["In progress", "Under review", "Finished"],
        default: "In progress"
    },
    priority: {
        type: String,
        enum: ["Urgent", "Medium", "Low"],
        default: "Medium"
    },
    deadline: {
        type: Date,
        required: true
    },
    description: {
        type: String,
    },
    content: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const Task = mongoose.model('Task', taskModal);

export default Task;