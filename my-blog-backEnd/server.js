const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // Initialize Express

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Mongoose Schema for Project
const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    technologies: [String],
    imageURL: String,
});

const Project = mongoose.model('Project', projectSchema);

// API Endpoint to fetch projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server, using a dynamic port for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
