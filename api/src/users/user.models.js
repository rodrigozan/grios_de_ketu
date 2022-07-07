import mongoose from "mongoose"
const Schema  = mongoose.Schema

const UserSchema = new Schema({
    nome: String,
    email: String
})

const UserModel = mongoose.model('user', UserSchema)

export { UserModel }