import mongoose from 'mongoose';
const { Schema } = mongoose;

const BlogSchema = new Schema({
  date: Date,
  author: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email',
    ],
  },
  topic: {
    type: String,
    enum: ['travel', 'sports', 'art'],
  },
  text: {
    type: String,
    required: [true, 'You should write something'],
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
});

export default mongoose.model('Blog', BlogSchema);
