// netlify/functions/getProjects.js

const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB connection URI
const MONGO_URI = process.env.MONGODB_URI; // You will store this in Netlify environment variables

// Define the Project schema (same as in your server.js)
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  technologies: [String],
  imageURL: String,
});

const Project = mongoose.model("Project", projectSchema);

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Using existing DB connection");
    return;
  }

  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
};

// Handler for the GET request to fetch projects
exports.handler = async (event, context) => {
  await connectDB(); // Ensure MongoDB is connected

  try {
    const projects = await Project.find(); // Fetch all projects
    return {
      statusCode: 200,
      body: JSON.stringify(projects),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
