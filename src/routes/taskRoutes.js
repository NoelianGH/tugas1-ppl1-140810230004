const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// POST /tasks (Create)
router.post('/', async (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({ status: "fail", message: "Title is required" });
    }

    try {
        const newTask = new Task({ title: req.body.title });
        const savedTask = await newTask.save();
        res.status(200).json({ status: "success", data: savedTask });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
});

// GET /tasks (Read)
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ status: "success", data: tasks });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
});

module.exports = router;