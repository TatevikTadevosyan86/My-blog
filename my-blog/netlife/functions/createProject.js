// netlify/functions/createProject.js

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

// Handler for POST request to create a new project
exports.handler = async (event, context) => {
  await connectDB(); // Ensure MongoDB is connected

  if (event.httpMethod === "POST") {
    try {
      const { name, description, technologies, imageURL } = JSON.parse(event.body);

      // Create a new project
      const newProject = new Project({
        name,
        description,
        technologies,
        imageURL,
      });

      // Save the project to the database
      await newProject.save();

      return {
        statusCode: 201,
        body: JSON.stringify({
          message: "Project created successfully",
          project: newProject,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "Error creating project",
          error: error.message,
        }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }
};
