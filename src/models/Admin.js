import mongoose from 'mongoose'

const { Schema } = mongoose

const adminSchema = new Schema({
  idle: {
    type: String,
    require: true,
    unique: true,
    maxlength: [150]
  },
  surnames: {
    type: String,
    require: true,
    maxlength: [150]
  },
  names: {
    type: String,
    require: true,
    maxlength: [150]
  },
  email: {
    type: String,
    require: false,
    default: null,
    maxlength: [100]
  },
})

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema)

export default Admin