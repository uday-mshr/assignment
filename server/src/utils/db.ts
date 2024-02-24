import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToDatabase = async () => {
    try {
        const URL = process.env.MONGO_URI || 'mongodb://root:examplePassword@data-mongo:27017/dataDB?authSource=admin';
        console.log("URL", URL);
        
        await mongoose.connect(URL);


        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectToDatabase;