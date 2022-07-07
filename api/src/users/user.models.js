import mongoose from "mongoose"
const Schema  = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String, minLength: 6, max: 30, required: true },
    email: { type: String, minLength: 6, max: 50, required: true },
    password: { type: String, minLength: 6, max: 20, required: true },
    birthday: { type: Date, required: true },
    name: String,
    pronouns: String,
    street: String,
    number: Number,
    complement: String,
    district: String,
    city: String,
    country: String,
    language: String, 
    socialMedia: [
        { 
            facebook: String,
            instagram: String,
            twitter: String,
            youtube: String,
            skook: String
        }
    ],
    about: String

})

const UserModel = mongoose.model('user', UserSchema)

export { UserModel }