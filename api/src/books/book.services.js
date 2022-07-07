import mongoose from '../database/config';
import { BookModel } from './book.models';

exports.find = async () => {
    return await BookModel.find().lean().exec();
}

exports.findById = async (id) => {
    return await BookModel.findById(id).lean().exec();
}

exports.insert = async (data) => {
    const user = new BookModel(data)
    return await user.save()
}

exports.update = async (data, id) => {
    return await BookModel.findOneAndUpdate({ _id: id }, data, { upsert: true })
}

exports.remove = async (id) => {
    return await BookModel.deleteOne({ _id: id })
}

