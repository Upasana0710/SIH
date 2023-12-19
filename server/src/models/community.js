import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            references: "userSchema",
        },
        members: {
            type: [mongoose.Schema.Types.ObjectId],
            references: "userSchema",
        },
        posts: {
            type: [mongoose.Schema.Types.ObjectId],
            references: "postSchema",
        },
    }
);

export default mongoose.model('Community', communitySchema);
