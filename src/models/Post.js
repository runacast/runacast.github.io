import mongoose from 'mongoose';

const { Schema } = mongoose

const postSchema = new Schema({
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
    body: {
        type: String
    },
    media: {
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

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export default Post