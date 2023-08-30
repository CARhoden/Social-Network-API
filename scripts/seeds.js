const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User');
const { Thought } = require('../models/Thoughts');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const users = [
    { username: 'Jane', email: 'Jane@email.com' },
    { username: 'John', email: 'John@email.com' }
];

const thoughts = [
    { thoughtText: 'This is a random thought from Jane', username: 'Jane' },
    { thoughtText: 'John thinking about code!', username: 'John' },
];

const seedDatabase = async () => {
    try {
        await User.insertMany(users);
        console.log('User data inserted!');

        await Thought.insertMany(thoughts);
        console.log('Thought data inserted!');

        mongoose.connection.close();
    } catch (err) {
        console.error(err);
        mongoose.connection.close();
    }
};

seedDatabase();