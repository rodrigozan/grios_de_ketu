import mongoose from '../database/config';
import db, { UserModel } from './user.models';

exports.find = async (query) => {
    return await UserModel.find(query).lean().exec();
}

exports.insert = async (nome, email) => {
    const data = {
        nome: nome,
        email: email
    }
    const user = new UserModel(data)
    return await user.save()
}