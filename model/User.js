import mongoose, { Schema } from 'mongoose';

const dataObject = {
    username: String,
    email: String,
    provider: String,
    providerAccountId: String,
    profilePicture: String,
    phoneNumber: String,
    birthdate: Date,
    description: String,
    activeStatus: Boolean
};

const userSchema = new Schema(dataObject, { timestamps: true });
const User = mongoose.models.User ?? mongoose.model('User', userSchema);

export default User;