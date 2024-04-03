const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    task: String,
    isCompleted: Boolean
});

module.exports = mongoose.model("ToDo", ToDoSchema);