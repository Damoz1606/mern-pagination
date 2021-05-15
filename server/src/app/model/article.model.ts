import { Schema, model } from 'mongoose';

const article_schema = new Schema({
    title: String,
    description: String,
    imageURL: String
}, {
    timestamps: true,
    versionKey: false
});

export default model("Article", article_schema);