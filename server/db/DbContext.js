import mongoose, { mongo } from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { CommentSchema } from '../models/Comment';
import { PostSchema } from '../models/Post'

class DbContext {
  Posts = mongoose.model('Post', PostSchema);
  Comments = mongoose.model('Comment', CommentSchema)
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
