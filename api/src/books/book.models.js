import mongoose from "mongoose"
const Schema  = mongoose.Schema

const BookSchema = new Schema({
    title: { type: String, minLength: 6, maxLength: 80, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'UserSchema', required: true },
    sinopse: { type: String, minLength: 20, max: 550, required: true },
    category: { type: String, required: true },
    tags: [String],
    public: String,
    language: String,
    copyrith: { type: String, required: true },
    classification: Boolean,
    chapters: [
        { 
            title: { type: String, minLength: 6, maxLength: 80, required: true },
            text: { type: String, required: true },
            cover: String,
            comments: [
                {
                    author: { type: Schema.Types.ObjectId, ref: 'UserSchema', required: true },
                    comment: { type: String },
                    datePublication: { type: Date, default: Date.now }
                }
            ]
        }
    ],
    datePublication: { type: Date, default: Date.now },
    dateUpdate: { type: Date }
})

const BookModel = mongoose.model('books', BookSchema)

export { BookModel }