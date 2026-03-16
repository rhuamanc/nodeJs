import {Schema, model} from "mongoose";

interface User{
    name:string
    email:string
    password:string
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const User = model<User>('User', userSchema);
export default User;