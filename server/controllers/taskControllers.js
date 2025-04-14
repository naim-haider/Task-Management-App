import Task from "../models/TaskModel.js";

export const addTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = new Task({
      title,
      description,
      status,
      userId: req.user.id,
    });
    await task.save();
    await task.populate("userId", "-password");
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id }).populate(
      "userId",
      "-password"
    );
    res.status(201).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!task) {
      return res
        .status(404)
        .json({ error: "Task not found or not authorized." });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!task) {
      return res
        .status(404)
        .json({ error: "Task not found or not authorized." });
    }
    res.status(204).json("Task deleted successfully");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
