import mongoose from 'mongoose';

const { Schema } = mongoose

const pageSchema = new Schema({
    path: {
        type: String,
        required: true,
        unique: true,
        maxlength: [50]
    },
    title: {
        type: String,
        require: true,
        maxlength: [50]
    },
    description: {
        type: String,
        require: true,
        maxlength: [100]
    },
    body: {
        type: String
    },
    images: {
        type: Array
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const Page = mongoose.models.Page || mongoose.model('Page', pageSchema)

export default Page