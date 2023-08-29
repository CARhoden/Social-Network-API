const express = require('express');
const router = express.Router();
const { User } = require('../models/User');

router.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;