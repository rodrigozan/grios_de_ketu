import mongoose from '../database/config';
import db, { UserModel } from './user.models';

exports.find = async (query) => {
    return await UserModel.find(query).lean().exec();
}