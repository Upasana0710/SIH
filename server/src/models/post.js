import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      references: 'userSchema',
    },
    title: {
      type: String,
      required: true,
    },
    text: String,
    category: {
      type: String,
      required: true,
    },
    community: {
      type: mongoose.Schema.Types.ObjectId,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', postSchema);
