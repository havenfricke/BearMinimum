import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CommentSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
  postId: { type: Schema.Types.ObjectId, ref: 'Post' },
  description: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
},
  { timestamps: true, toJSON: { virtuals: true } }
)


// CommentSchema.virtual('post', {
//   localField: 'postId',
//   foreignField: '_id',
//   justOne: true,
//   ref: 'Post'
// })
CommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
