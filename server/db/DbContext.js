import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { PostSchema } from '../models/Post'

class DbContext {
  Posts = mongoose.model('Post', PostSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
