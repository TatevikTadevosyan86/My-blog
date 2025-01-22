const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Environment variable for frontend URL
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';  // Default for development

// CORS Configuration: Allow only the frontend URL
app.use(cors({
    origin: frontendUrl,  // Only allow the specified frontend domain to make requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
    credentials: true,  // Allow cookies or auth headers if needed
}));

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection (replace with your Mongo URI)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

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

// Start the server, using dynamic port for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
