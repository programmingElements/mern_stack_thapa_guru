import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, "password is required."],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

export { User };