const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Registracija korisnika
router.post('/register', async (req, res) => {
    try {
        const { username, password, firstName, lastName, dateOfBirth, role, membershipExpires } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ error: 'Username already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: hashedPassword,
            firstName,
            lastName,
            dateOfBirth,
            role: role || 'user',
            membershipExpires
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login korisnika
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ error: 'Invalid username or password' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid username or password' });

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;