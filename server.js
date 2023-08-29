const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(userRoutes);


const PORT = process.env.PORT || 3001;

// connect to MONGO_URL from .env
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});