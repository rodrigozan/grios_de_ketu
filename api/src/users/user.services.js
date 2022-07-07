import mongoose from '../database/config';
import db, { UserModel } from './user.models';

exports.find = async () => {
    return await UserModel.find().lean().exec();
}

exports.findById = async (id) => {
    return await UserModel.findById(id).lean().exec();
}

exports.insert = async (data) => {
    const user = new UserModel(data)
    return await user.save()
}

exports.update = async (data, id) => {
    return await UserModel.findOneAndUpdate({ _id: id }, data, { upsert: true })
}

exports.remove = async (id) => {
    return await UserModel.deleteOne({ _id: id })
}

