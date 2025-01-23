const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// CORS configuration to allow requests from your frontend
const cors = require('cors');
app.use(cors({
    origin: ['https://tatevblog.netlify.app', 'http://localhost:3000'], // Allow production and local dev URLs
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a Mongoose schema and model for projects
const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    technologies: [String],
    imageURL: String,
});

const Project = mongoose.model('Project', projectSchema);

// API endpoint to fetch all projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects); // Return projects in JSON format
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch projects', error: error.message });
    }
});

// Start the server on the specified port
const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
