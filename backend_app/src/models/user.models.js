import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";

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

// secure the password with the bcrypt
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }

});

// check the password with hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}



const User = mongoose.model("User", userSchema);

export { User };