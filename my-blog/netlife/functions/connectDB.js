// netlify/functions/connectDB.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log('Using existing database connection');
            return;
        }
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');
    } catch (err) {
        console.log('Database connection error: ', err);
        process.exit(1);
    }
};

module.exports = connectDB;
