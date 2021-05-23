import mongoose, { Schema } from 'mongoose';

const entrySchema = new Schema({
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