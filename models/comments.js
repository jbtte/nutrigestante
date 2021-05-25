import mongoose from 'mongoose';

const commentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Me fala seu nome para eu saber quem é'],
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  approved:{
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

export default mongoose.models.Comments || mongoose.model('Comments',  commentsSchema)