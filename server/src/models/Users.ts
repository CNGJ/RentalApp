import mongoose, { Schema, model } from 'mongoose';

export interface User extends mongoose.Document {
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: number;
  score: number;
  created: Date;
}

const UsuariosSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  phone: {
    type: String,
    default: 'No Phone'
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  score: {
    type: Number
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

export default model<User>('User', UsuariosSchema);
