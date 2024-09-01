import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoConnect = async () => {
  try {
    if (!process.env.DB_URL) {
      throw new Error('Database url not found in .env file');
    }
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log('DB connected successful');
    return connection;
  } catch (error) {
    console.error('Connection to db failed: ', (error).message);
  }

};

export default mongoConnect;
