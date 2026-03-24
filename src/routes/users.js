const express = require('express');
const router = express.Router();
const User = require('../models/User'); // You'll need to create this model file

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json({ status: "success", data: users });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.get('/:id', (req, res) => {
    res.send(res.params.id)
})

// POST a new user
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email
    });
    try {
        const newUser = await user.save();
        res.status(201).json({ status: "success", data: newUser });
    } catch (err) {
        res.status(400).json({ status: "error", message: err.message });
    }
});

// PATCH update user (Update)
router.patch('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ status: "success", data: updatedUser });
    } catch (err) {
        res.status(400).json({ status: "error", message: err.message });
    }
});

// DELETE user (Delete)
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ status: "success", message: "Deleted User" });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
});

router.patch('/', (req, res) => {

})

router.delete('/', (req, res) => {

})
module.exports = router