import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    instituteEmail: {
        type: String,
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    phone: {
        type: String,
        required: true
    },
    programme: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    studySub: [mongoose.Schema.Types.ObjectId],
    teachSub: [mongoose.Schema.Types.ObjectId],
    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        references: "postSchema",
        default: [],
    },
    communities: {
        type: [mongoose.Schema.Types.ObjectId],
        references: "Community",
        default: [],
    },
    teachRating: {
        rating: String,
        total: String
    },
    studentRating: Number,
    slots: [{ 
        day: String,
        time: [String],
    }],
    booking: { 
        type: [mongoose.Schema.Types.ObjectId],
        references: "bookingSchema"
    }
})

export default mongoose.model("User", userSchema);