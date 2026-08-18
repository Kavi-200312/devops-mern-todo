const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5005;
const mongoUri = (process.env.MONGO_URI || 'mongodb://localhost:27017/localMongoDB')
    .replace(/^mongodb:\/\/mongo(?=[:/]|$)/i, 'mongodb://localhost');

app.use(cors());
app.use(express.json());

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const tasksRoute = require('./routes/tasks');
app.use('/api/tasks', tasksRoute);

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server}
