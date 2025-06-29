import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  role: 'user' | 'admin';
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

export default mongoose.model<IUser>('User', UserSchema);
