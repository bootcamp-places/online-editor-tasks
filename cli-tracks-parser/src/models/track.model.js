import mongoose from 'mongoose';

const trackSchema = new mongoose.Schema({
  trackId: { type: String, required: true, index: true, unique: true },
  title: { type: String },
  description: { type: String },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    }
  ]
});

export const TrackModel = mongoose.model('Track', trackSchema);
