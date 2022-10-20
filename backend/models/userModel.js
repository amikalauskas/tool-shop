import mongoose, { Mongoose } from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        uniqe: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmine: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User
