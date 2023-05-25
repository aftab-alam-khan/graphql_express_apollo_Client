const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mgmt_db';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    mongoose.connection.on('disconnected', () => console.log(`db Connection is closed`));
    mongoose.connection.on('error', (error) => console.log(`Connection disconnected due to some error: `, error.name));
    }
    catch(err) {
        console.log(`Connection disconnected due to some error: `, err.message);
    }
};

module.exports = connectDB;