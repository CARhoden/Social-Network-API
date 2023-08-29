const mongoose = require('mongoose');

require('dotenv').config();

// connect to MONGO_URL from .env
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});