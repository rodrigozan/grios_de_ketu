import mongoose from '../database/config';
import db, { UserModel } from './user.models';

exports.find = async (query) => {
    return await UserModel.find(query).lean().exec();
}

exports.findById = async (query) => {
    return await UserModel.findById(query).lean().exec();
}

exports.insert = async (user) => {
    const data = {
        nome: nome,
        email: email
    }
    const user = new UserModel(data)
    return await user.save()
}

exports.update = async (nome, email, id) => {
    const update = {
        nome: nome,
        email: email
    }
    return await UserModel.findOneAndUpdate({ _id: id }, update, { upsert: true })
}

exports.remove = async (id) => {
    return await UserModel.deleteOne({ _id: id })
}

