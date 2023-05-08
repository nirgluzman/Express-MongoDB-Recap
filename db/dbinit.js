import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.green);
  } catch (err) {
    console.log(err);
  }
};
