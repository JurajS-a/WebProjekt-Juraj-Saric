import mongoose, { Schema, Document } from 'mongoose';

export interface IFilm extends Document {
  title: string;
  description: string;
  rating: number;
  addedBy: string;
}

const FilmSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 10 },
  addedBy: { type: String, required: true },
});

export default mongoose.model<IFilm>('Film', FilmSchema);
