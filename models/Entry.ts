import mongoose, { Schema } from 'mongoose';
import { isDate } from 'util';

interface IEntrySchema {
  youtube: number,
  timestamp: Date
}

const entrySchema = new Schema<IEntrySchema>({
  youtube: {
    type: Number,
    default: 0
  },
  timestamp: {
    type: Date
  }
});

entrySchema.pre('save', function (next) {
  this.timestamp = new Date();
  next();
});

export default mongoose.models.Entry || mongoose.model('Entry', entrySchema);